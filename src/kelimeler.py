# -*- coding: utf-8 -*-
import json
import os
import time
import concurrent.futures
from threading import Lock

import pandas as pd
import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

# --- AYARLAR ---
CSV_FILE = r"C:\Users\omerf\LanguageApp\oxford-5k.csv"
OUTPUT_FILE = r"C:\Users\omerf\LanguageApp\oxford_dictionary.json"
WORKER_COUNT = 10 # 10 thread ile asenkron hizlandirma

# Terminalde turkce veya ozel karakter krizini onlemek icin ceviri tablosu
CHAR_MAP = str.maketrans("şŞıİçÇöÖüÜğĞ", "sSiIcCoOuUgG")

def safe_print(text):
    """Terminal encoding hatalarini engellemek icin purize edilmis ASCII metin basar."""
    safe_text = text.translate(CHAR_MAP).encode("ascii", "ignore").decode("ascii")
    print(safe_text)

def create_session():
    """Retry (back-off) stratejisine sahip bir HTTP Session dondurur."""
    session = requests.Session()
    # 429, 500, 502, 503, 504 durumlarinda otomatik exponential back-off
    retry = Retry(
        total=5,
        backoff_factor=2, 
        status_forcelist=[429, 500, 502, 503, 504],
        allowed_methods=["HEAD", "GET", "OPTIONS"]
    )
    adapter = HTTPAdapter(max_retries=retry)
    session.mount("http://", adapter)
    session.mount("https://", adapter)
    return session

def get_google_data(word, session):
    """Google uzerinden ceviri ve ornek cumle ceker, manuel back-off uygular."""
    translation = "Ceviri bulunamadi"
    examples = []
    
    max_retries = 3
    base_wait = 2

    # 1. Asil Ceviri ve Ornek Cekme
    for attempt in range(max_retries):
        try:
            url = f"https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=tr&dt=t&dt=ex&dt=md&q={word}"
            response = session.get(url, timeout=10)
            
            if response.status_code == 429:
                time.sleep(base_wait * (2 ** attempt))
                continue
                
            response.raise_for_status()
            res = response.json()
            
            # Ceviriyi al
            if res and len(res) > 0 and len(res[0]) > 0 and len(res[0][0]) > 0:
                translation = res[0][0][0].strip().rstrip(".")
                
            # Dinamik olarak ornekleri bul (No example durumunu minimize eder)
            def find_examples(obj):
                if isinstance(obj, list):
                    for i in obj:
                        find_examples(i)
                elif isinstance(obj, str) and "<b>" in obj:
                    clean_ex = obj.replace("<b>", "").replace("</b>", "").strip()
                    if clean_ex not in examples:
                        examples.append(clean_ex)
            
            find_examples(res)
            break # Basarili, donguden cik
            
        except Exception:
            time.sleep(base_wait * (2 ** attempt))

    # 2. Ornek Cikmazsa Fallback Endpoint Kullan (Yine back-off icerir)
    ex_fallback = ""
    if not examples:
        for attempt in range(max_retries):
            try:
                ex_url = f"https://translate.googleapis.com/translate_a/ex?client=gtx&sl=en&tl=tr&q={word}"
                ex_res = session.get(ex_url, timeout=10)
                if ex_res.status_code == 429:
                    time.sleep(base_wait * (2 ** attempt))
                    continue
                ex_res.raise_for_status()
                data = ex_res.json()
                if data and len(data) > 0 and len(data[0]) > 0:
                    ex_fallback = data[0][0]
                break
            except Exception:
                time.sleep(base_wait * (2 ** attempt))
                
    final_google_example = examples[0] if examples else ex_fallback
    return translation, final_google_example

def get_dictionary_data(word, session):
    """Dictionary API'den telaffuz ve ornek cumleyi ceker."""
    url = f"https://api.dictionaryapi.dev/api/v2/entries/en/{word}"
    phonetic = ""
    dict_example = ""
    try:
        r = session.get(url, timeout=10)
        if r.status_code == 200:
            data = r.json()[0]
            phonetic = data.get("phonetic", "")
            if not phonetic:
                for ph in data.get("phonetics", []):
                    if ph.get("text"):
                        phonetic = ph["text"]
                        break
            
            # Tanimlarin icindeki ornek cumleyi ara
            for meaning in data.get("meanings", []):
                for definition in meaning.get("definitions", []):
                    if definition.get("example"):
                        dict_example = definition["example"]
                        break
                if dict_example: break
    except Exception:
        pass
    return phonetic, dict_example

def process_word(row, session):
    """Tek bir kelimenin islenme gorevi."""
    word = str(row["word"]).lower().strip()
    level = str(row["level"]).upper().strip() if "level" in row else "A1"

    translation, google_example = get_google_data(word, session)
    phonetic, dict_example = get_dictionary_data(word, session)

    # Ornek cumle secimi: Iki API verisini en optimallestirilmis haliyle seciyoruz
    final_example = dict_example if dict_example else google_example

    return {
        "word": word,
        "translation": translation,
        "level": level,
        "example_sentence": final_example if final_example else "No example available.",
        "pronunciation": phonetic
    }

def create_json():
    safe_print(">>> SUREC BASLATILDI (Multi-Threaded & Optimized) <<<")
    if not os.path.exists(CSV_FILE):
        safe_print(f"HATA: CSV dosyasi bulunamadi: {CSV_FILE}")
        return

    df = pd.read_csv(CSV_FILE)
    results = []
    existing_words = set()

    # 1. Checkpoint: Kalinan yerden devam etme (JSON Okuma)
    if os.path.exists(OUTPUT_FILE):
        try:
            with open(OUTPUT_FILE, "r", encoding="utf-8") as f:
                results = json.load(f)
                existing_words = {str(e["word"]).lower().strip() for e in results}
                safe_print(f"Mevcut JSON bulundu! Toplam {len(results)} kelime zaten islenmis.")
        except Exception:
            safe_print("Mevcut JSON okunamadi, sifirdan baslaniyor.")

    # Sadece islenmemis kelimeleri filtrele
    to_process = []
    seen = set(existing_words)
    for _, row in df.iterrows():
        w = str(row["word"]).lower().strip()
        if pd.isna(row["word"]) or not w:
            continue
        if w not in seen:
            seen.add(w)
            to_process.append(row.to_dict())

    total_target = len(df)
    total_remaining = len(to_process)
    safe_print(f"Toplam listedeki kelime: {total_target}")
    safe_print(f"Kalan islenecek kelime (Multi-Thread ile): {total_remaining}")

    if total_remaining == 0:
        safe_print(">>> BUTUN KELIMELER ZATEN ISLENMIS! <<<")
        return

    session = create_session()
    lock = Lock()
    
    # Checkpoint icin kacar kelimede bir kayit yapilacak
    SAVE_INTERVAL = 50  
    save_counter = 0

    # Thread havuzu ile paralel isleme
    with concurrent.futures.ThreadPoolExecutor(max_workers=WORKER_COUNT) as executor:
        future_map = {executor.submit(process_word, row, session): row["word"] for row in to_process}
        
        for future in concurrent.futures.as_completed(future_map):
            original_word = str(future_map[future]).lower().strip()
            
            try:
                data = future.result()
                
                with lock:
                    # Guvenli bir sekilde ID atama ve sonuclari ekleme
                    data["id"] = len(results) + 1
                    
                    # Cikti formatinin siralamasini garantile
                    ordered_data = {
                        "id": data["id"],
                        "word": data["word"],
                        "translation": data["translation"],
                        "level": data["level"],
                        "example_sentence": data["example_sentence"],
                        "pronunciation": data["pronunciation"]
                    }
                    
                    results.append(ordered_data)
                    existing_words.add(ordered_data["word"])
                    
                    save_counter += 1
                    
                    # Terminalde canli izleme (Sade cikti)
                    safe_print(f"[{len(results)}/{total_target}] {ordered_data['word'].upper()} -> {ordered_data['translation']}")

                    # Ara kayit
                    if save_counter >= SAVE_INTERVAL:
                        for idx, item in enumerate(results):
                            item["id"] = idx + 1
                            
                        with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
                            json.dump(results, f, ensure_ascii=False, indent=4)
                        safe_print("--- ARA KAYIT YAPILDI (CHECKPOINT) ---")
                        save_counter = 0

            except Exception:
                safe_print(f"HATA: '{original_word}' islenirken bir sorun olustu.")

    # Dongu bittikten sonra son kaydi garantile
    # id'leri bastan sona %100 dogru numaralandir. (Cunku threadler yuzunden karisik siralanabilir)
    results = sorted(results, key=lambda x: x["word"]) # Alfabetik olsun veya mevcut id sirasinda kalsin, biz oylesine en son index verelim.
    for idx, item in enumerate(results):
        item["id"] = idx + 1
        
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=4)

    safe_print("\n>>> ISLEM TAMAMLANDI! <<<")
    safe_print(f"Olusturulan JSON: {OUTPUT_FILE}")

if __name__ == "__main__":
    create_json()