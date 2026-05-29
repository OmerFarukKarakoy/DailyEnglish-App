import requests
import json
import re

class NewsService:
    def __init__(self, api_key):
        self.api_key = api_key
        self.base_url = "https://content.guardianapis.com/search"

    def fetch_news(self, section="world", page_size=5):
        """
        The Guardian API'sine istek atar ve belirtilen kategoriye ait haberleri getirir.
        Gelen metni özet formatına (ilk 3 cümle) dönüştürür.
        """
        params = {
            "lang": "en",
            "show-fields": "bodyText,thumbnail",
            "page-size": page_size,
            "api-key": self.api_key
        }
        
        # Bütün kategorileri Guardian'ın 'world' (dünya) bölümünden çekerek,
        # İngiltere merkezli yerel haberlerin gelmesini engelliyoruz.
        if section == "world":
            params["section"] = "world"
        else:
            params["section"] = "world"
            params["q"] = section
        
        try:
            response = requests.get(self.base_url, params=params)
            response.raise_for_status()
            
            data = response.json()
            results = data.get("response", {}).get("results", [])
            
            cleaned_news = []
            for item in results:
                fields = item.get("fields", {})
                raw_text = fields.get("bodyText", "")
                
                # Metni temiz bir string formatına getir.
                clean_text = re.sub(r'\s+', ' ', raw_text).strip()
                
                # Özet mantığı: İlk 3 cümleyi al
                sentences = clean_text.split('. ')
                if len(sentences) > 3:
                    summary = '. '.join(sentences[:3]) + '.'
                elif len(clean_text) > 300:
                    summary = clean_text[:300] + '...'
                else:
                    summary = clean_text

                cleaned_news.append({
                    "id": item.get("id"),
                    "title": item.get("webTitle"),
                    "url": item.get("webUrl"),
                    "thumbnail": fields.get("thumbnail"),
                    "category": section,
                    "bodyText": summary
                })
            return cleaned_news
            
        except requests.exceptions.RequestException as e:
            print(f"Hata oluştu: {e}")
            return []

if __name__ == "__main__":
    # Test ve kullanım örneği
    API_KEY = "5e757e3d-47c7-41be-9c2f-8d33b0cbf5c3"
    service = NewsService(API_KEY)
    
    categories = ["world", "technology", "science", "sport", "business", "arts"]
    
    for cat in categories:
        print(f"\n--- {cat.upper()} HABERLERİ ÇEKİLİYOR ---")
        news = service.fetch_news(section=cat, page_size=2)
        
        for article in news:
            print(f"\nBaşık: {article['title']}")
            print(f"Özet: {article['bodyText']}")
