export const conjunctions = {
  id: 'conjunctions',
  name: '12- Conjunctions (Bağlaçlar)',
  icon: '🔗',
  color: '#EA580C',
  subtopics: [
    {
      id: 'coordinating',
      name: 'Conjunctions (Bağlaçlar)',
      icon: '⚖️',
      explanation: `
Bağlaçlar; kelimeleri, kelime gruplarını veya cümleleri birbirine bağlayarak aralarında mantıksal bir ilişki kuran sözcüklerdir.

**1. Yapısal Sınıflandırma (Kendinden Sonra Gelen Yapıya Göre)**
Bağlaçları, kendilerinden sonra gelen ifadenin türüne göre gruplandırmak, cümle kurarken hata yapmanı engeller:

| Grup | Aldığı İfade | Örnek |
| --- | --- | --- |
| **İsim Alanlar (Prepositions)** | İsim, İsim Öbeği, V-ing | Due to, Despite, Because of |
| **Cümle Alanlar (Subordinators)** | Tam Cümle (S+V+O) | Because, Although, Even if |
| **Her İkisini de Alanlar** | Hem İsim hem Cümle | After, Before, Since |

**2. Anlamsal Sınıflandırma (Cümleye Kattığı Anlama Göre)**
Bağlaçların cümle içindeki görevlerini belirleyen kategorilerdir:

| Kategori | Anlamı / İşlevi | Örnek Bağlaçlar |
| --- | --- | --- |
| **1. Zaman (Time)** | Eylemin zamanını belirtir. | When, while, as soon as, until, once, before, after |
| **2. Koşul (Condition)** | Şart bildirir. | If, unless, providing that, in case, as long as |
| **3. Sebep-Sonuç (Cause-Effect)** | Nedensellik ilişkisi kurar. | Because, since, as, due to, therefore, thus, consequently |
| **4. Zıtlık (Contrast)** | Çelişkiyi gösterir. | Although, however, despite, whereas, on the other hand, yet |
| **5. Pekiştirme (Addition)** | Bilgiye ek yapar. | Furthermore, moreover, in addition to, besides, also |
| **6. İkili Bağlaçlar (Correlative)** | İki parçalı yapı kurar. | Both... and..., Either... or..., Neither... nor..., Not only... but also |
| **7. Diğer Bağlaçlar (Other)** | Amaç, Tarz, Yer ve Örnekleme. | So that (Amaç), As if (Tarz), Wherever (Yer), Such as (Örnek) |
      `.trim(),
      quiz: [
        { q: 'I was tired, ___ I went to sleep.', options: ['but', 'so', 'nor', 'for'], answer: 'so' },
        { q: 'She is kind ___ generous.', options: ['but', 'or', 'and', 'nor'], answer: 'and' },
        { q: 'He tried hard, ___ he failed.', options: ['so', 'and', 'yet', 'for'], answer: 'yet' },
      ],
    },
    {
      id: 'subordinating',
      name: 'İsim Alan Bağlaçlar (Prepositional Phrases)',
      icon: '📎',
      explanation: `
İngilizcede bir bağlaç grubu eğer **"of, to, with, for"** gibi bir edat (preposition) ile bitiyorsa, kendisinden sonra tam bir cümle (S+V+O) gelemez. Bu yapılar sadece **isim, isim öbeği (noun phrase)** veya **V-ing (gerund)** alabilirler.

**1. "Preposition" ile Biten Yaygın Yapılar**

Bu yapılar, kendilerinden sonra gelen ismi bir "blok" haline getirir.

**Because of / Owing to / Due to / On account of / As a result of:** :: -den dolayı / sebebiyle

**Thanks to:** :: -nın sayesinde

**In spite of :** :: -e rağmen

**In addition to :** :: -e ek olarak

**Contrary to / In contrast to:** :: -nın aksine

**Regardless of:** :: Ne olursa olsun

**In case of:** :: -mesi halinde / ihtimaline karşı

**But for:** :: ... olmasa(ydı) (Sadece isimle kullanılır)

> **💡 Çeviri Kuralı:** Prepositional yapılarda Türkçeye çeviriye en sağdan (sondan) başlanır.

-The success of the project is due to a supportive partnership with the community.
(Projenin başarısı, toplumla olan destekleyici işbirliğinden kaynaklanmaktadır.)

-Because of linguistic differences, Chinese can be difficult to learn.
(Dilbilimsel farklardan dolayı, Çince öğrenmek zor olabilir.)

- Contrary to popular belief, alcoholic drinks are not ideal for large group events.
(Yaygın inanışın aksine, alkollü içecekler büyük grup etkinlikleri için ideal değildir.)

-Due to the heavy traffic, we arrived late at the office.
(Yoğun trafikten dolayı ofise geç vardık.)

-In spite of the cold weather, they played outside.
(Soğuk havaya rağmen dışarıda oynadılar.)

**2. Edat Görünümlü (Preposition) İsim Alan Yapılar**

Herhangi bir "of" veya "to" ile bitmeseler bile, dil bilgisi kuralları gereği doğrudan isim alan (bağlaç değil, edat fonksiyonu gören) kelimelerdir.

**Despite:** -e rağmen

**Unlike:** -nın aksine

**As well as:** -e ek olarak

-Despite the economic conditions, our brand has earned more than expected.
(Ekonomik şartlara rağmen markamız umulandan daha çok kazandı.)

-Unlike Turkey, Norway has a population with a majority of the elderly.
(Türkiye'nin aksine Norveç, yaşlı nüfusun çoğunlukta olduğu bir nüfusa sahiptir.)

-She speaks Spanish as well as English.
(İngilizcenin yanı sıra İspanyolca da konuşuyor.)
      `.trim(),
      quiz: [
        { q: '_____ it was raining, we played outside.', options: ['Because', 'Although', 'Until', 'Since'], answer: 'Although' },
        { q: 'I will wait here _____ you come back.', options: ['since', 'after', 'until', 'when'], answer: 'until' },
        { q: 'She studies hard _____ she can succeed.', options: ['because', 'so that', 'unless', 'while'], answer: 'so that' },
      ],
    },
    {
      id: 'clause_connectors',
      name: 'Cümle alan bağlaçlar',
      icon: '📝',
      explanation: `
Bir genelleme yapmak gerekirse preposition almayan bağlaçlar cümleyle devam ederler, isim alamazlar. Bu bağlaçlardan en yaygın kullanılanları sıralamak gerekirse:

**when:** ::-dığında
**while:** ::-iken
**as soon as:** ::-ır, -ırmaz
**just as:** ::-iken
**once:** ::-dığında
**now that:** ::mademki, -e göre
**if:** ::-se, -sa, eğer
**unless:** ::-mezse, -mazsa
**as long as:** ::-diği müddetçe
**even if:** ::-sa bile
**in case:** ::-sa diye, ihtimaline karşı
**so that:** ::-sın diye
**because:** ::-den dolayı, çünkü
**since:** ::-den dolayı, çünkü
**therefore:** ::bu yüzden, bundan dolayı
**thus:** ::bu yüzden, bundan dolayı
**hence:** ::bu yüzden, bundan dolayı
**consequently:** ::bu yüzden, bundan dolayı
**so:** ::bu yüzden, bundan dolayı
**as a result:** ::bu yüzden, bundan dolayı
**although:** ::-rağmen
**though:** ::-e rağmen, yine de
**even though:** ::-e rağmen
**even so:** ::öyle bile olsa, yine de
**whereas:** ::halbuki, -e karşılık
**but:** ::ama, ancak
**yet:** ::ama, ancak
**however:** ::ama, ancak, yine de
**nevertheless:** ::ama, ancak, yine de
**nonetheless:** ::ama, ancak, yine de
**moreover:** ::üstelik, dahası
**furthermore:** ::üstelik, dahası
**in addition:** ::üstelik, dahası

**Örnek Cümleler:**

The state forest is open for camping although certain areas require a permit.
(Belirli bölgeler izin gerektirse de eyalet ormanı kamp için açıktır.)

The injuries were not serious but were very painful.
(Yaralanmalar ciddi değildi ama çok ağrılıydı.)

Since it was raining, we decided to stay at home.
(Yağmur yağdığı için evde kalmaya karar verdik.)

I will study hard so that I can pass the exam.
(Sınavı geçebileyim diye çok çalışacağım.)

Even if you run fast, you cannot catch the bus.
(Hızlı koşsan bile otobüsü yakalayamazsın.)
      `.trim(),
      quiz: [
        { q: '_____ you run fast, you cannot catch the bus.', options: ['Even if', 'Because', 'Since', 'Unless'], answer: 'Even if' },
        { q: 'I will study hard _____ I can pass the exam.', options: ['so that', 'although', 'but', 'because'], answer: 'so that' },
        { q: 'The injuries were not serious _____ were very painful.', options: ['but', 'so', 'therefore', 'consequently'], answer: 'but' },
      ],
    },
    {
      id: 'dual_connectors',
      name: 'Hem İsim Hem Cümle Alabilen Bağlaçlar',
      icon: '🔄',
      explanation: `
Bazı bağlaçlar hem isimle hem de cümleyle kullanılabilme özelliğine sahiptir. Bu bağlaçlar; arkalarından isim geldiğinde **Edat (Preposition)**, cümle geldiğinde ise **Bağlaç (Conjunction)** görevini üstlenirler.

En yaygın olanları şunlardır:

**After:** :: -den sonra
**Before:** :: -den önce
**Until:** :: -e kadar
**As:** :: -den dolayı, olarak, gibi
**Since:** :: -den dolayı, -den beri
**Besides:** :: -e ek olarak, -nin yanında
**Notwithstanding:** :: Yine de, -e rağmen

**Örnekler:**

After the regulations, the prices became stable.
(Düzenlemelerden sonra fiyatlar sabit hale geldi. - İsimle kullanım)

After we had heard about the changes, we decided to change our jobs.
(Değişiklikleri duyduktan sonra, işimizi değiştirmeye karar verdik. - Cümleyle kullanım)

Since 1981, I have been living here in this city.
(1981'den beri bu şehirde yaşıyorum. - İsimle kullanım)

Since it was raining, we decided to stay at home.
(Yağmur yağdığı için evde kalmaya karar verdik. - Cümleyle kullanım)

Before the meeting, he prepared all the documents.
(Toplantıdan önce, tüm belgeleri hazırladı. - İsimle kullanım)

Before he started the meeting, he prepared all the documents.
(Toplantıya başlamadan önce, tüm belgeleri hazırladı. - Cümleyle kullanım)

> **💡 İpucu: Nasıl Ayırt Edilir?** (Preposition Testi): Bağlaçtan hemen sonra bir isim veya isim öbeği (v-ing dahil) geliyorsa, o bir "edat" gibi davranıyordur. (Conjunction Testi): Bağlaçtan hemen sonra bir "Özne" (I, you vb.) geliyorsa, o artık bir "bağlaç"tır.
      `.trim(),
      quiz: [
        { q: '_____ the meeting, he prepared all the documents.', options: ['Before', 'Because', 'So that', 'While'], answer: 'Before' },
        { q: 'I have been living here _____ 1981.', options: ['since', 'after', 'when', 'so'], answer: 'since' },
        { q: '_____ we had heard about the changes, we decided to change our jobs.', options: ['After', 'During', 'Unless', 'Despite'], answer: 'After' },
      ],
    },
    {
      id: 'time_connectors',
      name: '1. Zaman Bağlaçları',
      icon: '⏳',
      explanation: `
Doğrudan olayın geçtiği zamana işaret eden ve birbirine bağlayan iki cümle arasında "Zaman Uyumu" isteyen bağlaç grubudur. Bu bağlaçlar aşağıdaki gibi listelenebilir:

**when:** :: -dığında
**once:** :: -dığında
**while:** :: -iken
**by:** :: -e kadar, -den önce
**after:** :: -den sonra
**before:** :: -den önce
**until:** :: -e kadar
**since:** :: -den beri
**by the time:** :: -e kadar, -den önce
**as soon as:** :: -ır, -ırmaz
**the moment:** :: -ır, -ırmaz
**no sooner ... than:** :: -ır, -ırmaz
**hardly ... when:** :: -ır, -ırmaz
**barely ... when:** :: -ır, -ırmaz
**scarcely ... when:** :: -ır, -ırmaz

Bu bağlaçlar (since hariç) kullanıldıkları cümlelerde bir zaman uyumu kuralı içinde çalışırlar.

> **💡 İpucu:** "Ne zaman" sorusu sorduğunda mantıklı cevaplar veren tüm bağlaçlar zaman bağlacıdır.

**Zaman Uyumu Kuralı:**

Zaman bağlacı **PRESENT**, **PRESENT** ya da **FUTURE**

Zaman bağlacı **PAST**, **PAST**

**Örnekler:**

When (bağlaç) the plant was closed (past), hundred of workers became (past) unemployed.
(Fabrika kapandığında yüzlerce işçi işsiz kaldı)

As soon as (bağlaç) I saw (past) the proof in front of me, I realised (past) how obvious the crime was.
(Kanıtları önümde görür görmez suçun ne kadar açık olduğunu fark ettim)

These problems will go on until (bağlaç) we make (present) reasonable decisions.
(Biz mantıklı kararlar alana kadar bu sorunlar devam edecek)

The first dose is given (present) before (bağlaç) the child leaves (present) the hospital.
(Çocuk hastaneden ayrılmadan önce ilk doz verilir)

By the time he arrives (Present), I will be (Future) ready to leave.
(O vardığında, ayrılmaya hazır olacağım.)
      `.trim(),
      quiz: [
        { q: '_____ the plant was closed, hundred of workers became unemployed.', options: ['When', 'So that', 'Unless', 'Even if'], answer: 'When' },
        { q: 'These problems will go on _____ we make reasonable decisions.', options: ['until', 'since', 'while', 'because'], answer: 'until' },
        { q: '_____ he arrives, I will be ready to leave.', options: ['By the time', 'Since', 'Because', 'While'], answer: 'By the time' },
      ],
    },
    {
      id: 'condition_connectors',
      name: '2. Koşul Bağlaçları',
      icon: '🚥',
      explanation: `
Bu gruptaki bağlaçlar, olayların gerçekleşmesi için gereken koşul ve şartları ifade etmek için kullanılır. (Akla *if* gelir.)

**if:** :: -se, -sa, eğer
**unless:** :: -mezse, -mazsa
**provided that:** :: -mesi şartıyla
**providing that:** :: -mesi şartıyla
**as long as:** :: -diği müddetçe
**so long as:** :: -diği müddetçe
**on condition that:** :: koşuluyla
**supposing that:** :: varsayarak (eğer)
**if only:** :: keşke (dilek/şart kipi)
**in case:** :: -sa diye, ihtimaline karşı
**otherwise:** :: aksi taktirde, yoksa
**but for:** :: olmasa(ydı)
**or (else):** :: aksi taktirde, yoksa

Koşul bağlaçlarında "if" kuralları (tense uyumları) önemlidir.

**Örnekler:**

- You aren't allowed to leave unless you get the doctor's permission.
(Doktorun iznini almadıkça ayrılmana izin verilmez.)

- As long as you have confidence, determination and desire, you'll be unstoppable.
(Güven, kararlılık ve arzuya sahip olduğun müddetçe durdurulamazsın.)

- Scholarships are available for students who cannot otherwise afford the tuition.
(Burslar, aksi takdirde okul masrafını karşılayamayacak olan öğrenciler için mevcuttur.)

- Take a map with you in case you get lost.
(Kaybolursan diye yanına bir harita al.)

- Provided that we work overtime, we can finish the project on time.
(Fazla mesai yapmamız şartıyla/durumunda, projeyi zamanında bitirebiliriz.)

- They will release the documents on condition that they remain confidential.
(Belgelerin gizli kalması koşuluyla onları paylaşacaklar/yayınlayacaklar.)

> **💡 NOT:** If'in kendi cümlesinde (If clause) **will** ya da **would** kullanılmaz. Bu yapılar genellikle ana cümleye (main clause) gelir.

- If you take the medicine, you will look healthy; otherwise you will look ill.
(İlacı alırsan sağlıklı görünürsün; aksi takdirde hasta görüneceksin.)

> **💡 NOT:** **If only** bağlacı, diğerlerinden farklı olarak genellikle "keşke" anlamında dilek ve temenni (wish) cümlelerinde kullanılır. Teknik olarak bir koşul bildirse de, kullanımı diğerlerinden biraz daha duygusaldır.
      `.trim(),
      quiz: [
        { q: "Take a map with you _____ you get lost.", options: ['in case', 'unless', 'provided that', 'if only'], answer: 'in case' },
        { q: "You aren't allowed to leave _____ you get the doctor's permission.", options: ['unless', 'if', 'as long as', 'otherwise'], answer: 'unless' },
        { q: "_____ we work overtime, we can finish the project on time.", options: ['Provided that', 'Otherwise', 'In case', 'But for'], answer: 'Provided that' },
      ],
    },
    {
      id: 'cause_effect_connectors',
      name: '3. Sebep-Sonuç Bağlaçları',
      icon: '🎯',
      explanation: `
İki taraf arasında bir sebep sonuç ilişkisi kurmak için kullandığımız bağlaçlardır:

**because:** :: -den dolayı, çünkü
**as:** :: -den dolayı, çünkü
**since:** :: -den dolayı, çünkü
**due to:** :: -den dolayı
**because of:** :: -den dolayı
**owing to:** :: -den dolayı
**thanks to:** :: -den dolayı, sayesinde
**given that:** :: -den dolayı, çünkü
**seeing that:** :: -den dolayı, çünkü
**that's why:** :: bu yüzden, bundan dolayı
**therefore:** :: bu yüzden, bundan dolayı
**in order to:** :: -mek, -mak için
**so as to:** :: -mek, -mak için
**so that:** :: -sın diye
**in order that:** :: -sın diye
**in that:** :: çünkü, şu yönüyle
**on account of:** :: -den dolayı
**accordingly:** :: bu yüzden, bundan dolayı
**consequently:** :: bu yüzden, bundan dolayı
**so:** :: bu yüzden, bundan dolayı
**as a result:** :: bu yüzden, bundan dolayı
**as a result of:** :: -den dolayı
**thus:** :: bu yüzden, bundan dolayı
**hence:** :: bu yüzden, bundan dolayı
**for:** :: -den dolayı, çünkü

> **💡 NOT:** Sebep-sonuç cümlelerinde bir taraf olumluysa diğer taraf da olumludur (+,+) veya tam tersi (-,-).

**Örnekler:**

- Because of the crisis, consumers have become too anxious to spend freely.
(Krizden dolayı, tüketiciler özgür şekilde harcama yapamayacak kadar gergin hale geldiler)

- Honeybees are disappearing from hives due to colony collapse disorder.
(Koloni çöküşü hastalığından dolayı bal arıları kovanlardan yok oluyorlar)

- The weather was terrible; therefore, we decided to cancel the event.
(Hava berbattı; bu yüzden etkinliği iptal etmeye karar verdik.)

- Since the streets were crowded, we had to walk to the office.
(Sokaklar kalabalık olduğu için ofise yürümek zorunda kaldık.)

> **💡 NOT:** "So as to" ve "in order to" preposition ile bittiği halde fiil ile devam eden istisnai bağlaçlardır.

- Workers started to produce small bricks so as to use them in small churches and theatres.
(İşçiler küçük kiliselerde ve tiyatrolarda kullanmak için küçük tuğlalar üretmeye başladılar)

- She moved to London in order to study English.
(İngilizce çalışmak için Londra'ya taşındı.)
      `.trim(),
      quiz: [
        { q: "Honeybees are disappearing from hives _____ colony collapse disorder.", options: ['due to', 'since', 'because', 'so that'], answer: 'due to' },
        { q: "She moved to London _____ study English.", options: ['in order to', 'because', 'therefore', 'as a result'], answer: 'in order to' },
        { q: "The weather was terrible; _____, we decided to cancel the event.", options: ['therefore', 'since', 'because of', 'due to'], answer: 'therefore' },
      ],
    },
    {
      id: 'contrast_connectors',
      name: '4. Zıtlık Bağlaçları',
      icon: '↔️',
      explanation: `
İki taraf arasında bir zıtlık ya da beklenenin gerçekleşmemesi ilişkisi kurmak için kullandığımız bağlaçlardır:

**although:** :: -rağmen
**though:** :: -rağmen
**even though:** :: -rağmen
**much as:** :: -rağmen
**while:** :: -rağmen
**nevertheless:** :: ama, ancak, yine de
**nonetheless:** :: ama, ancak, yine de
**but:** :: ama, ancak
**even so:** :: öyle bile olsa, yine de
**yet:** :: ama, ancak, yine de
**whereas:** :: -iken, oysa
**despite:** :: -rağmen
**in spite of:** :: -rağmen
**however:** :: ama, ancak, yine de
**notwithstanding:** :: ama, -e rağmen
**as opposed to:** :: -nın aksine
**on the contrary:** :: aksine
**contrary to:** :: -nın aksine
**conversely:** :: aksine
**in contrast to:** :: -nın aksine
**unlike:** :: -nın aksine

> **💡 NOT:** Zıtlık bağlaçlarının kullanıldığı cümlelerde cümlenin bir tarafı olumlu iken diğer tarafı olumsuzdur. (-,+) veya (+,-)

**Örnekler:**

- Even though high fuel prices have hit airlines hard, people are still travelling.
(Yüksek petrol fiyatları havayollarını ciddi şekilde vursa da, insanlar hala seyahat ediyorlar.)

- The team trained extremely hard for the match; however, they lost by a narrow margin.
(Takım maç için çok sıkı antrenman yaptı; ancak maçı az farkla kaybettiler.)

- Despite this progress, natural gas production in Nigeria still seems low.
(Bu ilerlemeye rağmen, Nijerya'daki gaz üretimi hala düşük görünüyor.)

- In contrast to her older sister, Ruri has a stubborn and hostile personality.
(Büyük kız kardeşinin aksine, Ruri inatçı ve düşmanca bir kişiliğe sahip.)

- The road was blocked due to heavy snow; nevertheless, the ambulance arrived on time.
(Yol yoğun kar nedeniyle kapalıydı; yine de ambulans vaktinde ulaştı.)

> **💡 NOT:** "Whereas" bağlacı iki farklı kavramı zıtlık verecek şekilde karşılaştırır.

- A virus requires a host to survive, whereas bacteria can live independently.
(Bir virüs hayatta kalmak için bir ev sahibi/ortam gerektirir, oysa bakteriler bağımsızdır.)

- My brother loves winter sports, whereas I prefer spending the summer at the beach.
(Kardeşim kış sporlarını sever, oysa ben yazı sahilde geçirmeyi tercih ederim.)
      `.trim(),
      quiz: [
        { q: "The team trained extremely hard for the match; _____, they lost.", options: ['however', 'because', 'therefore', 'so'], answer: 'however' },
        { q: "_____ this progress, natural gas production still seems low.", options: ['Despite', 'Although', 'Even though', 'Because of'], answer: 'Despite' },
        { q: "A virus requires a host to survive, _____ bacteria can live independently.", options: ['whereas', 'because', 'since', 'due to'], answer: 'whereas' },
      ],
    },
    {
      id: 'addition_connectors',
      name: '5. Üstelik Bağlaçları',
      icon: '➕',
      explanation: `
İki taraf arasında bir güçlendirme, destekleme, üsteleme ilişkisi kurmak için kullandığımız bağlaçlardır:

**moreover:** :: üstelik, dahası
**furthermore:** :: üstelik, dahası
**further:** :: üstelik, dahası
**what's more:** :: üstelik, dahası
**in addition:** :: üstelik, dahası
**in addition to:** :: -e ek olarak, -nın yanında
**besides:** :: üstelik, dahası, -e ek olarak
**as well as:** :: -e ek olarak, -nın yanında

**Örnekler:**

- Spider silk is a strong and elastic material, and moreover it is biodegradable.
(Örümcek ağı güçlü ve elastik bir materyaldir, ve üstelik toprakta çözünebilir.)

- In addition to sushi, the restaurant serves Chinese, Thai and Korean foods.
(Suşiye ek olarak, bu restoran Çin, Tai ve Kore yemekleri de sunuyor.)

- Besides living in a crowded city, he also works in a noisy environment.
(Kalabalık bir şehirde yaşamanın yanı sıra, bir de gürültülü bir ortamda çalışıyor.)

- The project was successful; furthermore, the team gained valuable experience.
(Proje başarılıydı; üstelik ekip değerli bir deneyim kazandı.)

> **💡 Kritik Not (Yapı Farkı):**
> **- Moreover / Furthermore / What's more:** Cümle başına gelir ve arkasından tam bir cümle (S+V) gelir.
> **- In addition to / Besides / As well as:** Arkasından genellikle isim (Noun) veya fiilin **-ing (Gerund)** hali gelir, tam cümle gelmez.
      `.trim(),
      quiz: [
        { q: "The project was successful; _____, the team gained valuable experience.", options: ['furthermore', 'although', 'unless', 'even if'], answer: 'furthermore' },
        { q: "_____ sushi, the restaurant serves Chinese, Thai and Korean foods.", options: ['In addition to', 'Moreover', 'Furthermore', 'Because'], answer: 'In addition to' },
        { q: "Spider silk is strong, and _____ it is biodegradable.", options: ['moreover', 'despite', 'because', 'although'], answer: 'moreover' },
      ],
    },
    {
      id: 'correlative_connectors',
      name: '6. İkili Bağlaçlar (Correlative Conjunctions)',
      icon: '🖇️',
      explanation: `
İki taraf arasındaki bağlantıyı sağlarken iki parçadan oluşan bir yapı kullandığımız bağlaçlardır.

**both ... and:** :: hem ... hem (de)
**neither ... nor:** :: ne ... ne de
**either ... or:** :: ya ... ya da
**not only ... but also:** :: sadece ... değil, aynı zamanda ... da
**whether ... or:** :: ister ... ister
**not ... but:** :: (bu) değil, (bu)

**Örnekler:**

**both ... and** (hem ... hem de)-(Sıfat - Sıfat paralelliği)
- It is illegal in both Kansas and Iowa to sell a mobile home without clear permission.
(Hem Kansas hem de Iowa'da açık ve net bir izin olmadan taşınabilir ev satmak yasaktır.)

**neither ... nor** (ne ... ne de)-(İsim - İsim paralelliği)
- Neither the teacher nor the students were aware of the change.
(Ne öğretmen ne de öğrenciler değişiklikten haberdardı.)

**either ... or** (ya ... ya da)-(Fiil - Fiil paralelliği)
- You can either pay in cash or use your credit card.
(Ya nakit ödeyebilirsin ya da kredi kartını kullanabilirsin.)

**not only ... but also** (sadece ... değil, aynı zamanda ...)-(Fiil - Fiil paralelliği)
- Irresponsible practices not only spread misinformation but also prevent progress.
(Sorumsuz uygulamalar sadece yanlış bilgi yaymakla kalmaz, aynı zamanda ilerlemeyi de engeller.)

**whether ... or** (ister ... ister)-(Fiil - Fiil paralelliği)
- It doesn't matter whether you win or lose.
(Kazansan da kaybetsen de fark etmez.)

**not ... but** (...değil, ...)-(İsim - İsim paralelliği)
- It is not the destination but the journey that matters.
(Önemli olan varış noktası değil, yolculuğun kendisidir.)

> **💡 Önemli NOT (Paralel Yapı):**
> Bu tarz cümlelerde birinci bağlaçtan sonra isim geliyorsa ikinci bağlaçtan sonra da isim gelir. Fiil varsa fiil, edat (preposition) varsa da edat gelmelidir. Buna "**Parallel Structure**" (Paralellik) denir.

> **💡 Kritik Bilgi:**
> **Neither...nor** veya **either...or** kullanırken fiilin çekimi, bağlacın hemen yanındaki (ikinci) özneye göre yapılır.
> - Örnek: Neither the teacher nor the **students are** here.(Ne öğretmen ne de öğrenciler burada.) ! İkinci özne "students" çoğul olduğu için "are" kullanılır.
      `.trim(),
      quiz: [
        { q: "You can _____ pay in cash or use your credit card.", options: ['either', 'neither', 'both', 'whether'], answer: 'either' },
        { q: "_____ the teacher nor the students were aware of the change.", options: ['Neither', 'Either', 'Both', 'Not only'], answer: 'Neither' },
        { q: "It is _____ the destination but the journey that matters.", options: ['not', 'neither', 'either', 'both'], answer: 'not' },
      ],
    },
    {
      id: 'other_connectors',
      name: '7. Diğer Bağlaçlar (Çeşitli Bağlaç Yapıları)',
      icon: '🧩',
      explanation: `
Özellikle belirli bir gruba ait olmayan ancak metin akışında sıklıkla karşımıza çıkan bağlaçlardır:

**in terms of:** :: -nın açısından
**by means of:** :: -desteğiyle, vasıtasıyla
**on behalf of:** :: -nın adına
**whereby:** :: -nın vasıtasıyla, yoluyla
**thereby:** :: bu sebeple, öylelikle
**rather than:** :: -den ziyade
**with respect to:** :: ile ilgili olarak
**instead of:** :: -nın yerine
**instead:** :: yerine
**as of:** :: -den itibaren
**as for:** :: -e gelince
**as to:** :: hakkında, ile ilgili olarak
**in response to:** :: -e karşılık olarak
**just as:** :: aynen ... gibi
**regardless of:** :: bakılmaksızın
**as regards:** :: ile ilgili olarak
**no matter:** :: bakılmaksızın
**in accordance with:** :: -e uygun olarak
**as a matter of fact:** :: nitekim, aslında
**along with:** :: yanında, -ile birlikte
**in so far as:** :: -den dolayı, -diği kadarıyla
**such as:** :: gibi, örneğin
**as yet:** :: şimdiye kadar, henüz
**as if:** :: -(miş) gibi
**regarding:** :: hakkında
**in comparison to:** :: -ile (karşılaştırıldığında)
**as such:** :: bu itibarla, böylelikle
**except for:** :: hariç
**except that:** :: hariç
**as though:** :: -(miş) gibi
**if anything:** :: bilakis, aksine
**according to:** :: -e göre

**Örnekler:**

- Rather than complaining about the problem, we should focus on finding a solution.
(Sorundan şikayet etmekten ziyade, bir çözüm bulmaya odaklanmalıyız.)

- Regardless of your background, everyone has an equal chance to succeed here.
(Geçmişine bakılmaksızın, burada herkesin başarılı olmak için eşit şansı var.)

- He acts as if he owns the company.
(Şirketin sahibiymiş gibi davranıyor.)

> **💡 NOT:** Bu listedeki ifadelerin çoğu kendisinden sonra "**isim**" veya "**gerund (fiilin -ing hali)**" almayı sever. Özellikle "**Regardless of**", "**In terms of**" ve "**According to**" ifadelerinden sonra tam cümle (S+V) değil, isim getirmeye dikkat edersen gramerin hatasız olur.
      `.trim(),
      quiz: [
        { q: "_____ your background, everyone has an equal chance to succeed here.", options: ['Regardless of', 'Instead of', 'Except for', 'Rather than'], answer: 'Regardless of' },
        { q: "_____ complaining about the problem, we should focus on finding a solution.", options: ['Rather than', 'As to', 'As of', 'According to'], answer: 'Rather than' },
        { q: "He acts _____ he owns the company.", options: ['as if', 'such as', 'instead of', 'as to'], answer: 'as if' },
      ],
    },
    {
      id: 'dictionary',
      name: 'Conjunctions Dictionary (Bağlaç Sözlüğü)',
      icon: '📖',
      type: 'dictionary',
      explanation: ``,
      quiz: [],
    },
  ],
};
