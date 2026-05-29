export const noun_clause = {
  id: 'noun_clause',
  name: '17- Noun Clause (İsim Cümlecikleri)',
  icon: '📦',
  color: '#FF3333',
  subtopics: [
    {
      id: 'noun_clause_basic',
      name: 'Noun Clause (İsim Cümleciği)',
      icon: '🗣️',
      explanation: `
Noun Clause (NC), bir cümle içerisinde **Özne**, **Nesne** veya **Tamamlayıcı (Tümleç)** görevini üstlenen cümleciğe denir.

**A. Temel Farklar: RC vs. NC**

| Özellik | Relative Clause (RC) | Noun Clause (NC) |
| --- | --- | --- |
| **Görevi** | Bir ismi niteler (Sıfat görevindedir). | Cümlenin ana unsuru olur (İsim görevindedir). |
| **Atılabilirlik** | Atılabilir (Bilgi verir, zorunlu değildir). | Atılamaz (Cümlenin asıl parçasıdır). |
| **Mantığı** | İsmi tanımlar/açar. | Fiili veya cümleyi tamamlar. |

**B. NC'nin İşlevi ve Örnekler**
Cümlenin asıl unsuru oldukları için Noun Clause yapılarını cümleden sildiğinizde, geriye kalan cümle "havada kalır" (anlamsızlaşır).

**Örnek (Nesne Görevi):**
- Many people listen to the radio programmes. (Basit nesne)
    Çevirisi: Birçok insan radyo programlarını dinler.
- Many people listen to **what you say**. (NC – Nesne görevinde)
    Çevirisi: Birçok insan söylediklerini dinler.

**Örnek (Özne Görevi):**
- **That he is honest** is a known fact. (NC – Özne görevinde)
    Çevirisi: Dürüst olduğu bilinen bir gerçektir.

**C. Noun Clause Türleri**
İngilizcede Noun Clause yapıları 4 ana grupta toplanır:

**1. Wh- Grubu ile yapılanlar: (What, where, when, why, who, how)**
- I don't know **why he left**.
    Çevirisi: Neden ayrıldığını bilmiyorum.

**2. That ile yapılanlar:**
- I think **that he is right**.
    Çevirisi: Haklı olduğunu düşünüyorum.

**3. Whether / If ile yapılanlar: (E olup olmadığı anlamında)**
- I wonder **whether/if he will come**.
    Çevirisi: Geleceğini merak ediyorum.

**4. Kısaltılmış olanlar (Reduced Noun Clauses):**
- I don't know **what to do**. (Normali: what I should do)
    Çevirisi: Ne yapacağımı bilmiyorum.

**💡 Önemli Hatırlatma:**
Noun Clause'lar tek başlarına bir cümle gibi görünebilirler, ancak bir "Ana Cümle" (Main Clause) içinde erirler. RC'ler ise ismin hemen ardından gelerek o isme yapışırlar. Noun Clause'lar genellikle fiilden hemen sonra gelerek, **"Ne/Neyi/Kimi?"** sorularının cevabı olurlar.
      `.trim(),
      quiz: [
        { q: 'I do not know ___ she lives.', options: ['that', 'where', 'who', 'what'], answer: 'where' }
      ]
    },
    {
      id: 'noun_clause_wh_embedded',
      name: '1. Wh- Grubu ile Yapılan Noun Clause (Embedded Questions)',
      icon: '❓',
      explanation: `
Bu yapıyı **"Soru Bozması"** olarak kodlayabiliriz. Bir soru cümlesini (doğrudan soru), başka bir cümlenin içine nesne veya özne olarak monte ettiğimizde, o cümle artık bir soru değil, bir isim cümlesi (Noun Clause) olur.

**Temel Mantık: Soru Düzeninden Düz Cümleye**
Doğrudan sorularda yardımcı fiil (can, will, are vb.) öznenin önündedir. Noun Clause yaparken bunu bozarız ve yardımcı fiili öznenin arkasına atarız.

| Doğrudan Soru (Direct Question) | Noun Clause (Soru Bozması) |
| --- | --- |
| What can you do? | What you can do |
| How will you arrive? | How you will arrive |
| Why are you here? | Why you are here |

**Örneklerle Uygulama**

**1. Örnek:**
- **Soru:** What can you do for us? (Bizim için ne yapabilirsin?)
- **Noun Clause:** What you can do for us (Bizim için yapabileceğin şey)
- **Cümle İçinde:** We need to learn **what you can do for us**.
    (Bizim için yapabileceğin şeyi öğrenmemiz gerekiyor.)

**2. Örnek:**
- **Soru:** How will you arrive there in time? (Oraya zamanında nasıl varacaksın?)
- **Noun Clause:** How you will arrive there in time (Oraya nasıl zamanında varacağın)
- **Cümle İçinde:** You should tell us **how you will arrive there in time**.
    (Oraya nasıl zamanında varacağını bize söylemelisin.)

**3. Örnek:**
- **Soru:** Why are you still here? (Neden hala buradasın?)
- **Noun Clause:** Why you are still here (Neden hala burada olduğun)
- **Cümle İçinde:** I want to know **why you are still here**.
    (Neden hala burada olduğunu bilmek istiyorum.)

**💡 Özetle:**
Soru cümlesini soru formundan (**yardımcı fiil + özne**) çıkarıp, bir isim gibi davranacak şekilde (**özne + yardımcı fiil**) düzeltiyoruz. Bu sayede bu yapı; ana cümlenin öznesi veya nesnesi haline geliyor.
      `.trim(),
      quiz: [
        { q: 'I want to know where ___ .', options: ['did he go', 'he went', 'does he go', 'is he go'], answer: 'he went' },
        { q: 'Can you tell me why ___ crying?', options: ['is she', 'she is', 'does she', 'she does'], answer: 'she is' }
      ]
    },
    {
      id: 'noun_clause_that',
      name: '2. "That" ile Yapılan Noun Clause',
      icon: '🔗',
      explanation: `
**"That"** yapısı, herhangi bir düz cümleyi (S+V+O) alıp bir **"isim"** haline getirir. Türkçeye çevirirken cümleye **"-mesi/-ması"** veya **"-diği/-dığı"** anlamı katar.

**A. Temel Kurallar**

__Nesne Olarak:__ 
Fiilden sonra gelir, fiilin neyi/kimi tamamladığını söyler.

__Özne Olarak:__ 
Cümlenin en başında gelir. Ancak "That" ile başlayan cümleler çok uzun olduğunda, İngilizcede özneyi sona atıp başa "It" (boş özne) koyarız.

**B. Örnekler (Nesne ve Özne Kullanımı)**

__1. Örnek:__ 
__Düz Cümle:__ Erosion is a serious threat for agriculture. 
(Erozyon tarım için ciddi bir tehdittir.)

Cümlenin NC'ye dönüşmesi için başına "That" yazılır:
- __Noun Clause:__ That erosion is a serious threat for agriculture...
(Erozyonun tarım için ciddi bir tehdit olduğu...)

- __Nesne Olarak:__ We all know **that erosion is a serious threat for agriculture.**
(Hepimiz erozyonun tarım için ciddi bir tehdit olduğunu biliyoruz.)
- __Özne Olarak:__ **That erosion is a serious threat for agriculture** is known by all of us.
(Erozyonun tarım için ciddi bir tehdit olduğu hepimiz tarafından biliniyor.)

__2. Örnek:__ 
__Düz Cümle:__ Eating too much and doing little exercise lead to obesity.
(Çok fazla yemek yemek ve az egzersiz yapmak obeziteye yol açar.)

- __Cümle İçinde (Nesne):__ Doctors warn us **that eating too much and doing little exercise lead to obesity.**
(Doktorlar, çok yemek ve az egzersiz yapmanın obeziteye yol açtığı konusunda bizi uyarıyor.)

__3. Örnek:__ 
__Düz Cümle:__ Life exists on other planets.
(Diğer gezegenlerde yaşam var.)

- __Cümle İçinde (Özne Olarak):__ **That life exists on other planets** is still a subject of research.
(Diğer gezegenlerde yaşamın olduğu, hâlâ bir araştırma konusudur.)

__4. Örnek:__ 
__Düz Cümle:__ They will arrive late to the meeting.
(Toplantıya geç kalacaklar.)

- __Cümle İçinde (Özne Olarak):__ **That they will arrive late to the meeting** worries the manager.
(Toplantıya geç kalacakları gerçeği müdürü endişelendiriyor.)

**C. "It... That" Yapısı (The Dummy Subject)**

"That" ile başlayan bir Noun Clause özne olduğunda, cümle bazen çok ağırlaşır. Bunu çözmek için cümleyi "It" ile başlatırız ve "That"li kısmı sona atarız.
Kalıp: It + is/are/seems/appears + (adjective) + that...

**D. Örnekler (It...That Yapısı)**

- __Cümle:__ It is known **that Erciyes was once an active volcano.**
    Çeviri: Erciyes'in bir zamanlar aktif bir volkan olduğu biliniyor.

- __Cümle:__ It seems **that Covid-19 virus will affect more than 5 million people around the world.**
    Çeviri: Covid-19 virüsünün dünya genelinde 5 milyondan fazla insanı etkileyeceği görülüyor.

- __Cümle:__ It is obvious to everyone **that the team worked hard.**
    Çeviri: Takımın çok çalıştığı herkes tarafından aşikâr.
    Analiz: "It" burada gramer gereği yer tutan boş öznedir. Asıl özne yine sona attığımız "that the team worked hard" kısmıdır.

- __Cümle:__ It is certain **that the project will be finished on time.**
    Çeviri: Projenin zamanında bitirileceği kesindir.
      `.trim(),
      quiz: [
        { q: 'We know ___ the earth is round.', options: ['what', 'that', 'who', 'where'], answer: 'that' },
        { q: '___ he is telling the truth is obvious.', options: ['What', 'That', 'Why', 'How'], answer: 'That' }
      ]
    },
    {
      id: 'noun_clause_whether_if',
      name: '3. Whether / If ile Yapılan Noun Clause',
      icon: '⚖️',
      explanation: `
Bu yapı, bir soru içermeyen düz cümlelerin "belirsizlik, merak veya ikilem" bildiren yüklemlerle (wonder, doubt, not sure, ask) birleşerek isimleşmiş halidir.

**A. Temel Fark: Kesinlik vs. Belirsizlik**

__That:__ 
Kesinlik bildirir. Yüklemler genellikle şöyledir: **know, say, state, suggest, sure, certain.**

__Whether / If:__ 
Belirsizlik, şüphe veya merak bildirir. Yüklemler genellikle şöyledir: **wonder, not sure, doubt, ask, depend on.**

**B. Kurallar**

- __Anlam:__ Türkçeye "-ıp / -madığı" veya "-ip / -meyeceği" şeklinde çevrilir.
- __Or (Not) Kullanımı:__ Whether ile "or not" kullanımı çok yaygındır. Whether hem başında hem sonunda "or not" alabilir.
- __Özne Durumu (En Kritik Kural):__
    __Whether:__ Cümlede özne olarak kullanılabilir.
    __If:__ Cümlede asla özne olarak kullanılmaz. Cümleye "If" ile başlarsanız, o bir Noun Clause değil, bir Şart Cümlesi (Conditional) olur.

**C. Örnekler**

__1. Örnek:__
__Düz Cümle:__ Cell phones can lead to brain tumour.
- __Noun Clause:__ Whether / If cell phones can lead to brain tumour (or not)
(Cep telefonunun beyin tümörüne yol açıp açmadığı)
- __Cümle İçinde (Nesne):__ We wonder **whether / if cell phones can lead to brain tumour (or not).**
(Cep telefonunun beyin tümörüne yol açıp açmadığını merak ediyoruz.)

__2. Örnek:__
__Düz Cümle:__ They will sign the contract. (Sözleşmeyi imzalayacaklar.)
- __Noun Clause:__ Whether / If they will sign the contract (or not).
(Sözleşmeyi imzalayıp imzalamayacakları.)
- __Cümle İçinde (Nesne):__ I don't know **whether / if they will sign the contract (or not).**
(Sözleşmeyi imzalayıp imzalamayacaklarını bilmiyorum.)

__3. Örnek:__
__Düz Cümle:__ The exam will be difficult. (Sınav zor olacak.)
- __Noun Clause:__ Whether / If the exam will be difficult (or not).
(Sınavın zor olup olmayacağı.)
- __Cümle İçinde (Nesne):__ Students are debating **whether / if the exam will be difficult (or not).**
(Öğrenciler sınavın zor olup olmayacağını tartışıyorlar.)

__4. Örnek:__
__Düz Cümle:__ He likes the gift. (Hediyeyi seviyor/beğeniyor.)
- __Noun Clause:__ Whether / If he likes the gift (or not).
(Hediyeyi beğenip beğenmediği.)
- __Cümle İçinde (Nesne):__ We need to find out **whether / if he likes the gift (or not).**
(Hediyeyi beğenip beğenmediğini öğrenmemiz gerekiyor.)

**D. Önemli İpucu: Özne Kullanımı**

- __Doğru (Whether):__ **Whether she will come to the party** is not clear.
    (Partiye gelip gelmeyeceği belli değil.)
- __Yanlış (If):__ **If she will come to the party** is not clear.
    (Bu cümle hatalıdır; "If" burada şart cümlesi gibi algılanır ve cümlenin geri kalanıyla bağlantı kurulamaz.)
      `.trim(),
      quiz: [
        { q: 'I wonder ___ he will arrive on time.', options: ['that', 'if', 'what', 'who'], answer: 'if' },
        { q: '___ she likes the present or not is a mystery.', options: ['If', 'Whether', 'That', 'Where'], answer: 'Whether' }
      ]
    },
    {
      id: 'noun_clause_reduced',
      name: '4. Kısaltılmış Noun Clause (Reduced Noun Clauses)',
      icon: '✂️',
      explanation: `
Noun Clause yapılarını, anlamı bozmadan daha kısa ve pratik hale getirmek için **"To + Verb" (Infinitive)** yapısını kullanırız.

**A. Kısaltma Kuralları**

- __Zamanı Atar:__ "Can, will, should" gibi yardımcı fiiller kalkar.
- __Özne Uyumu:__ Ana cümlenin öznesi ile NC'nin öznesi aynı olmalıdır.
- __"That" Yasağı:__ "That" ile yapılan Noun Clause'lar asla bu şekilde kısaltılmaz.

**B. Tablo İncelemesi**

| Tam Hali (Full Clause) | Kısaltılmış Hali (Reduced) | Çevirisi |
| --- | --- | --- |
| I don't know what I can do. | I don't know what to do. | Ne yapacağımı bilmiyorum. |
| He explained how we will operate the machine. | He explained how to operate the machine. | Makineyi nasıl çalıştıracağımızı açıkladı. |
| We aren't sure whether we accept or reject the offer. | We aren't sure whether to accept or reject the offer. | Teklifi kabul edip etmeme konusunda emin değiliz. |

**C. Örnek Cümleler**

__1. Örnek:__
__Tam Hali:__ She didn't know where she should go.
(Nereye gideceğini bilmiyordu.)
__Kısaltılmış:__ She didn't know **where to go.**
(Nereye gideceğini bilmiyordu.)
__Not:__ "Where" (nerede/nereye) kelimesi burada bir yön/yer belirtir, "to go" ise eylemi açıklar.

__2. Örnek:__
__Tam Hali:__ He asked me whom he should invite to the party.
(Partiye kimi davet etmem gerektiğini sordu.)
__Kısaltılmış:__ He asked me **whom to invite** to the party.
(Partiye kimi davet etmem gerektiğini sordu.)
__Not:__ "Whom" kullanımı daha resmidir, günlük dilde "who to invite" da oldukça yaygındır.

**D. Önemli İpuçları ve Kurallar**

__💡 Neden "That" Kısaltılamaz?__
"That" yapısı bir olayın gerçekleştiğini veya gerçekleşeceğini (fact) belirtir.
__Örneğin:__ I know that he should go. (Burada "o"nun gitmesi gerektiği bir bilgidir.) 
Kısaltıp "I know that to go" derseniz, cümledeki özne (he) kaybolur ve ne dediğiniz anlaşılmaz. 
Bu yüzden o gerçekliğin içinde mutlaka "özne + yüklem" bağı bulunmalıdır. "To" yapısı ise özneyi kaybeder.

__Altın Kural (Subject Match):__
Kısaltma yapabilmek için ana cümlenin öznesi ile Noun Clause'un öznesi aynı kişi olmalıdır.
- __Doğru:__ I don't know what I should do. => I don't know **what to do.**
(İki özne de "I")
- __Yanlış:__ I don't know what she should do. 
(Burada özne "she" olduğu için kısaltma yapıp "what to do" derseniz kimin yapacağı belirsizleşir. Bu yüzden özne farklıysa kısaltma yapılmaz.)
      `.trim(),
      quiz: [
        { q: 'He showed me how ___ the engine.', options: ['to start', 'starting', 'starts', 'started'], answer: 'to start' },
        { q: 'I haven\'t decided whether ___ to the party or not.', options: ['go', 'to go', 'going', 'went'], answer: 'to go' }
      ]
    }
  ]
};
