export const reduction = {
  id: 'reduction',
  name: '19- Reduction (Kısaltma)',
  icon: '✂️',
  color: '#FF6600',
  subtopics: [
    {
      id: 'reduction_basic',
      name: 'Reduction(Kısaltmalar)',
      icon: '📉',
      explanation: `
📌 **Reduction (Kısaltmalar)**

İngilizce'de "Relative Clause" (Sıfat Cümlecikleri) kullanılırken cümleyi daha akıcı hale getirmek için bazı kelimeleri atabilir veya fiilleri kısaltabiliriz. Buna **Reduction** denir.

İşte en temel 3 Kısaltma Kuralı:

🔹 **1. Özne Durumlarında Kısaltma**
Eğer **whom, which, that** gibi ilgi zamirlerinden hemen sonra bir **özne** (*I, you, he, the people* vb.) geliyorsa, zamiri doğrudan silebiliriz!

**Normal:** The man **whom** I saw was a doctor.
**Kısaltılmış:** The man **I saw** was a doctor.
*(Gördüğüm adam bir doktordu.)*

🔹 **2. "Be" Yardımcı Fiili Durumu**
Eğer ilgi zamirinden sonra **am, is, are, was, were** geliyorsa, hem zamiri hem de "be" fiilini atarız!

**Sıfat ile:** The woman **who is** happy... ➔ The woman **happy**...
**Yer ile:** The books **which are** on the table... ➔ The books **on the table**...
**Passiv (V3):** The car **which was** stolen... ➔ The car **stolen**...

🔹 **3. Normal Fiil Durumu**
Eğer zamirden sonra direkt eylem (run, work, play vb.) geliyorsa, zamiri sileriz ve fiile **-ing** takısı getiririz.

**Normal:** People **who work** here are friendly.
**Kısaltılmış:** People **working** here are friendly.
*(Burada çalışan insanlar arkadaş canlısıdır.)*

📋 **Kısa Özet Tablosu**
*   **Özne gelirse:** Sadece zamiri sil.
*   **"Be" gelirse:** Zamir ve "Be" ikisini de sil.
*   **Fiil gelirse:** Zamiri sil, fiile **-ing** ekle.
`,
      quiz: [
        { q: 'The boy ___ in the corner is my brother.', options: ['stand', 'stands', 'standing', 'stood'], answer: 'standing' }
      ]
    },
    {
      id: 'reduction_object',
      name: '1. Whom/Which/That Sonrası Özne Durumunda Kısaltma',
      icon: '👤',
      explanation: `
📌 **Nesne Konumundaki Kısaltma (Object Reduction)**

Cümle içinde nitelediğimiz isimden sonra gelen zamirler (**whom, which, that**) eğer bir **özne** (we, she, the children vb.) tarafından takip ediliyorsa, bu zamirler hiçbir anlam kaybı olmadan cümleden doğrudan atılabilir.


🟢 **Örnek Cümleler ve Çevirileri**

• The people (whom) **we trust most** are our parents.
➔ The people **we trust most** are our parents.
(En çok güvendiğimiz insanlar ebeveynlerimizdir.)

• The books (which) **Stephen Spielberg wrote** are my favorite.
➔ The books **Stephen Spielberg wrote** are my favorite.
(Stephen Spielberg'in yazdığı kitaplar benim favorimdir.)

• Any kind of drugs (that) **the children take** should be given under control.
➔ Any kind of drugs **the children take** should be given under control.
(Çocukların aldığı her türlü ilaç kontrol altında verilmelidir.)


🔎 **Detaylı Analiz**

**Örnek 1:**
The phone (which) **I bought** last week has a great camera.
➔ The phone **I bought last week** has a great camera.
(Geçen hafta satın aldığım telefonun harika bir kamerası var.)
**Kural:** "Phone" isminden sonra "I" (özne) geldiği için "which" doğrudan atıldı.

**Örnek 2:**
The teacher (whom) **you recommended** is really experienced.
➔ The teacher **you recommended** is really experienced.
(Tavsiye ettiğin öğretmen gerçekten tecrübeli.)
**Kural:** "Teacher" isminden sonra "you" (özne) geldiği için "whom" doğrudan atıldı.


💡 **Altın İpucu**

Bir cümlede "**İsim + İsim + Fiil**" dizilimini yan yana görüyorsan, orada gizli bir *which/that/whom* vardır!

• The movie **[I] [saw]**... (İzlediğim film)
• The car **[he] [bought]**... (Satın aldığı araba)
`,
      quiz: [
        { q: 'The teacher ___ you recommended is really experienced.', options: ['whom', 'who', 'which', 'whose'], answer: 'whom' }
      ]
    },
    {
      id: 'reduction_be',
      name: '2. Who/Which/That sonrasında "be" eylemli durumlarda kısaltma',
      icon: '➖',
      explanation: `
📌 **2. "Be" Eylemi ile Kısaltma (Omission of 'who/which/that + be')**

Bir Relative Clause içerisinde "**who/which/that**" zamirlerinden hemen sonra "**be**" (am, is, are, was, were) yardımcı fiili geliyorsa, kısaltma yapmak için **hem zamir hem de yardımcı fiil birlikte cümleden atılır**. Geriye kalan kısım, tanımladığı ismin hemen yanına (veya arasına) yerleşir.


🟢 **Örnek Cümleler ve Çevirileri**

• Ankara, *(which is)* the capital of Turkey, is the second biggest city of our country.
➔ **Ankara, the capital of Turkey, is the second biggest city of our country.**
(Türkiye'nin başkenti olan Ankara, ülkemizin ikinci büyük şehridir.)

• Atatürk, *(who was)* one of the greatest leaders of the world, is the founder of the Turkish Republic.
➔ **Atatürk, one of the greatest leaders of the world, is the founder of the Turkish Republic.**
(Dünyanın en büyük liderlerinden biri olan Atatürk, Türkiye Cumhuriyeti'nin kurucusudur.)

• The famous actors *(that are)* admired by everyone should take responsibility for violence.
➔ **The famous actors admired by everyone should take responsibility for violence.**
(Herkes tarafından takdir edilen ünlü oyuncular, şiddet konusunda sorumluluk almalıdır.)

• The keys *(which are)* in my pocket belong to the new house.
**Kısaltılmış Hali:** The keys **in my pocket** belong to the new house.
**Çeviri:** Cebimdeki anahtarlar yeni eve ait.
**Neden Kısaltıldı?** "Which are" yapısı atıldığında, geriye sadece yer bildiren "in my pocket" (cebimde) kısmı kalır ve doğrudan ismi niteler.

• The project *(that was)* finished on time impressed the manager.
**Kısaltılmış Hali:** The project **finished on time** impressed the manager.
**Çeviri:** Zamanında bitirilen proje müdürü etkiledi.
**Neden Kısaltıldı?** "That was" yapısı atıldığında, fiilin 3. hali (V3 - finished) sıfatlaşarak ismi niteler.


💡 **Altın Kural: Kısaltma Sonrası Ne Kalır?**

Bu kısaltmayı yaptığında geriye genellikle şunlar kalır:
*   **Sıfat veya Sıfat Öbeği:** The man *(who is)* tired ➔ The **tired** man.
*   **İsim Tamlaması (Appositive):** Ankara, *(which is)* the capital... ➔ Ankara, **the capital**...
*   **Past Participle (V3 - Passive):** The actors *(that are)* admired... ➔ The actors **admired**...
*   **Prepositional Phrase:** The book *(which is)* on the table ➔ The book **on the table**.
`,
      quiz: [
        { q: 'The keys ___ in my pocket belong to the new house.', options: ['which are', 'are', 'in', 'being'], answer: 'in' },
        { q: 'The project ___ on time impressed the manager.', options: ['that finished', 'was finished', 'finished', 'finishing'], answer: 'finished' }
      ]
    },
    {
      id: 'reduction_active_passive',
      name: '3. Eylem Durumunda Kısaltma (Active & Passive Reduction)',
      icon: '⚡',
      explanation: `
📌 **3. Eylem Durumunda Kısaltma (Active & Passive Reduction)**

Relative Clause içinde **özne + eylem** varsa, zamir ve yardımcı fiil atılarak eylem kısaltılır.


📊 **Kısaltma Tablosu**

| Yapı | Kısaltma Formülü | Örnek (Kısaltılmamış) | Örnek (Kısaltılmış) |
| :--- | :--- | :--- | :--- |
| **Aktif (Active)** | V-ing | The woman who is working... | The woman **working**... |
| **Pasif (Passive)** | V3 (Past Participle) | The soldiers who were killed... | The soldiers **killed**... |
| **Gelecek/Modal** | To V1 | The places that will be visited... | The places **to be visited**... |


🔎 **Detaylı Notlar**

🟢 **A. Aktif Kısaltma (V-ing)**
**Kural:** Zamir atılır, fiil **-ing** takısı alır. *(Zamanın bir önemi yoktur).*

• The woman *(who works/worked/is working)*... ➔ The woman **working**...
• The laws *(which regulate)* (veya *have regulated*)... ➔ The laws **regulating**...

**Örnek Cümleler:**
• Tam Cümle: The students who are waiting for the exam results are very nervous.
➔ Kısaltılmış: The students **waiting** for the exam results are very nervous.
(Sınav sonuçlarını bekleyen öğrenciler çok gergin.)

• Tam Cümle (Teknik): The algorithm which is processing the big data is very complex.
➔ Kısaltılmış: The algorithm **processing** the big data is very complex.
(Büyük veriyi işleyen algoritma çok karmaşık.)

🔴 **B. Pasif Kısaltma (V3)**
**Kural:** Zamir ve "be" fiili atılır, sadece **V3** kalır.

• The soldiers *(who were killed)*... ➔ The soldiers **killed**...
• A measure *(which has been taken)*... ➔ A measure **taken**... *(veya Having been taken - çok daha resmi/öncelik bildirir)*

**Örnek Cümleler:**
• Tam Cümle: The houses which were damaged by the earthquake were evacuated.
➔ Kısaltılmış: The houses **damaged** by the earthquake were evacuated.
(Depremde hasar gören evler tahliye edildi.)

• Tam Cümle (Teknik): The data which was collected from sensors needs to be cleaned.
➔ Kısaltılmış: The data **collected** from sensors needs to be cleaned.
(Sensörlerden toplanan verilerin temizlenmesi gerekiyor.)

🔵 **C. Gelecek Zaman ve "To" Yapıları (To V1 / To be V3)**
**Kural:** Bu yapı özellikle **sıralama** (the first/second/last), **tek olma** (the only) durumlarında veya gelecek zaman/zorunluluk bildiren durumlarda kullanılır. Eğer cümlede "**will, can, must**" gibi modallar veya bir amaç (için) varsa, **to + V1** (aktif) veya **to be + V3** (pasif) kullanılır.

• The places *(that will be visited)*... ➔ The places **to be visited**...
• The money *(which I need to spend)*... ➔ The money **to spend**...

**Örnek Cümleler:**
• Tam Cümle (Aktif): She is the only person who can help us with this project.
➔ Kısaltılmış: She is the only person **to help** us with this project.
(Bu projede bize yardım edecek / yardım edebilecek tek kişi o.)

• Tam Cümle (Pasif): These are the errors that must be fixed immediately.
➔ Kısaltılmış: These are the errors **to be fixed** immediately.
(Bunlar hemen düzeltilmesi gereken hatalardır.)
`,
      quiz: [
        { q: 'The laws ___ air pollution are very strict now.', options: ['regulate', 'regulated', 'regulating', 'to regulate'], answer: 'regulating' },
        { q: 'The soldiers ___ in the battle were remembered as heroes.', options: ['killing', 'killed', 'kill', 'to kill'], answer: 'killed' }
      ]
    }
  ]
};
