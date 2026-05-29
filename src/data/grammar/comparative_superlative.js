export const comparative_superlative = {
  id: 'comparative_superlative',
  name: '8- Adjectives, Adverbs & Comparison 2 (Sıfatlar,Zarflar ve Karşılaştırmalar 2)',
  icon: '🥇',
  color: '#FF00CC',
  subtopics: [
    {
      id: 'comp_super_basic',
      name: 'Karşılaştırmalar (Comparison)',
      icon: '⚖️',
      explanation: `**Karşılaştırma Yapıları (Comparison)**

İngilizcede nesneleri veya kişileri birbirleriyle kıyaslamak için iki ana yöntem kullanılır: **Comparative** (İki şeyi kıyaslama) ve **Superlative** (En üstünü seçme).

**1. Comparative (-den daha...)**
İki varlığı birbiriyle kıyaslarken kullanılır. Sıfatın uzunluğuna (hece sayısına) göre belirlenir:
- **Kısa Sıfatlar:** Sıfatın sonuna "-er" gelir. *(Fast = Faster)*
- **Uzun Sıfatlar:** Sıfatın başına "more" gelir. *(Beautiful = More beautiful)*
- **Bağlaç:** Kıyaslanan ikinci şeyden önce mutlaka **"than"** kullanılır.
  - **Örnek:** A plane is **faster than** a car. (Uçak, arabadan daha hızlıdır.)

---

**2. Superlative (En...)**
Bir grup içindeki (en az üç şey) en üstün olanı belirtmek için kullanılır.
- **Kısa Sıfatlar:** Sıfatın başına "the", sonuna "-est" gelir. *(Small = The smallest)*
- **Uzun Sıfatlar:** Sıfatın başına "the most" gelir. *(Expensive = The most expensive)*
- **Kullanım:** Genellikle "dünyadaki en...", "şimdiye kadarki en..." gibi ifadelerle desteklenir.
  - **Örnek:** Cheetah is **the fastest** animal in the world. (Çita dünyadaki en hızlı hayvandır.)

---

**3. Eşitlik: As ... As (Kadar)**
İki şeyin birbirine eşit olduğunu veya olmadığını belirtmek için kullanılır.
- **Olumlu:** As [*Sıfat*] as (Kadar)
- **Olumsuz:** Not as/so [*Sıfat*] as (Kadar değil)
  - **Örnek:** I am **as tall as** my brother. (Erkek kardeşim kadar boyum uzun.)

---

⚠️ **Düzensizler (Ezberlenmesi Gerekenler)**
Bazı sıfatlar kurallara uymaz, tamamen değişirler:

| **Sıfat** | **Comparative (Daha)** | **Superlative (En)** |
| :--- | :--- | :--- |
| **Good** (İyi) | Better | **The best** (En iyi) |
| **Bad** (Kötü) | Worse | **The worst** (En kötü) |
| **Little** (Az) | Less | **The least** (En az) |`,
      quiz: [
        { q: 'Cheetah is ___ animal in the world.', options: ['fast', 'faster', 'the fastest', 'most fast'], answer: 'the fastest' },
        { q: 'A plane is ___ than a car.', options: ['fasts', 'faster', 'fast', 'fastest'], answer: 'faster' },
        { q: 'I am not ___ successful as my sister.', options: ['so', 'too', 'than', 'very'], answer: 'so' }
      ]
    },
    {
      id: 'more_than',
      name: '1- More ... than',
      icon: '⚖️',
      explanation: `**1. More ... than (-den daha)**

Bu yapı, iki şeyi birbiriyle kıyaslarken **"-den daha"** anlamı veren karşılaştırma yapısıdır. Sıfatın veya zarfın uzunluğuna (hece sayısına) göre ya başına **"more"** gelir ya da sonuna **"-er"** eki eklenir.

**Uzun Sıfatlar (3 veya daha fazla hece):** Başına "more" alır.
- comfortable → **more comfortable** (daha rahat)
- difficult → **more difficult** (daha zor)

**Kısa Sıfatlar (1 veya 2 hece):** Sonuna "-er" alır.
- easy → **easier** (daha kolay)
- hot → **hotter** (daha sıcak)

**Düzensiz Sıfatlar (Kurallara uymayanlar):**
- good → **better** (daha iyi)
- bad → **worse** (daha kötü)
- far → **farther / further** (daha uzak)
- little → **less** (daha az)

**Örnek Cümleler:**
- Yesterday's exams were **easier than** today's exams. (Dünkü sınavlar bugünkü sınavlardan daha kolaydı.)
- This car is **more expensive than** the other one. (Bu araba diğerinden daha pahalıdır.)

💡 **Not:** "More" ifadesi araya sıfat almadan, doğrudan miktar belirtmek için "more than" (-den daha fazla) şeklinde de kullanılabilir.
- **More than** 9000 people have died from the tsunami so far. (Tsunamiden şimdiye kadar 9000'den fazla insan öldü.)

---

**"More" Öncesi Güçlendirme Yapıları**
Karşılaştırma anlamını pekiştirmek için "more" veya "-er" takılı kelimelerin önüne şu ifadeler getirilebilir:

**Çok daha:** much, far, rather, a lot, even
**Biraz daha:** a bit, a little

**Örnekler:**
- **far more** important (çok daha önemli)
- **a lot more** impressive (çok daha etkileyici)
- **rather shorter** (oldukça daha kısa)
- **much cheaper** (çok daha ucuz)
- **even more** interesting (hatta daha ilginç)

⚠️ **ÖNEMLİ NOT:** Karşılaştırma yapısında "than" kelimesinden sonra isim, zamir veya eksik cümle kullanılır; tam cümle (Özne + Fiil + Nesne) kullanılması tercih edilmez.`,
      quiz: [
        { q: "Today's weather is ___ than yesterday's weather.", options: ['hot', 'hotter', 'more hot', 'hottest'], answer: 'hotter' },
        { q: 'This lesson is ___ more difficult than the others.', options: ['too', 'very', 'much', 'many'], answer: 'much' },
        { q: 'My brother plays tennis ___ than I do.', options: ['good', 'better', 'best', 'more good'], answer: 'better' }
      ]
    },
    {
      id: 'the_most',
      name: '2- The Most',
      icon: '🏆',
      explanation: `**2. The Most (En ...)**

**Superlative** adı verilen bu yapı, bir grup içindeki **"en"** üstün olanı belirtmek için kullanılır. Sıfatın veya zarfın uzunluğuna (hece sayısına) göre ya başına **"the most"** getirilir ya da sonuna **"-est"** eki eklenir.

**Uzun Sıfatlar (3 veya daha fazla hece):** Başına "the most" alır.
- comfortable → **the most comfortable** (en rahat)
- difficult → **the most difficult** (en zor)
- hardworking → **the most hardworking** (en çalışkan)

**Kısa Sıfatlar (1 veya 2 hece):** Başına "the" alır ve sonuna "-est" eklenir.
- easy → **the easiest** (en kolay)
- hot → **the hottest** (en sıcak)
- cheap → **the cheapest** (en ucuz)

**Düzensiz Sıfatlar (Kurallara uymayanlar):**

| **Sıfat (Adjective)** | **Daha (Comparative)** | **En (Superlative)** |
| :--- | :--- | :--- |
| **Good** (İyi) | Better (Daha iyi) | **The best** (En iyi) |
| **Bad** (Kötü) | Worse (Daha kötü) | **The worst** (En kötü) |
| **Far** (Uzak) | Farther / Further | **The farthest / furthest** (En uzak) |
| **Little** (Az) | Less (Daha az) | **The least** (En az) |

**Örnek Cümleler:**
- Language is **the most interesting** topic for me. (Dil benim için en ilginç konudur.)
- Mount Everest is **the highest** mountain in the world. (Everest Dağı dünyadaki en yüksek dağdır.)

---

**Superlative Yapıların Özel Kullanımları**

**2.1 "Of" ile Kullanım**
"Arasında" ya da "-in/-ın" anlamı veren **"of"** edatı, superlative yapılarla sıklıkla kullanılır (özellikle *"one of the..."* kalıbında).
- This is **one of the most effective drugs** in the industry. (Bu, endüstrideki en etkili ilaçlardan birisidir.)
- He is **one of the best players of** the team. (O, takımın en iyi oyuncularından biridir.)

**2.2 "Ever" ile Kullanım**
"Şimdiye kadar" anlamındaki **"ever"** ifadesi, en üstünlük derecesini pekiştirmek için kullanılır.
- Northern Cyprus is **one of the most exciting places** I have **ever** visited. (Kuzey Kıbrıs, şimdiye kadar ziyaret ettiğim en heyecanlı yerlerden birisidir.)
- This is **the most delicious meal** I have **ever** eaten. (Bu, şimdiye kadar yediğim en lezzetli yemek.)

---

**The Most Öncesi Güçlendirme Yapıları**
Cümlelerde "en" anlamını daha da vurgulamak (gelmiş geçmiş, açık ara, kesinlikle vb.) için şu ifadeler kullanılır:

- **by far:** (Açık ara) → by far the most effective
- **quite:** (Gerçekten/Kesinlikle) → quite the most expensive
- **the very:** (Tam anlamıyla en / Gelmiş geçmiş en) → the very best

**Örnekler:**
- **by far the most** effective (açık ara en etkili)
- **quite the most** expensive (kesinlikle en pahalısı)
- **the very best** (en iyinin de iyisi / gelmiş geçmiş en iyi)`,
      quiz: [
        { q: 'He is ___ student in our class.', options: ['the better', 'the best', 'better', 'the good'], answer: 'the best' },
        { q: 'This is the most beautiful place I have ___ seen.', options: ['never', 'always', 'ever', 'often'], answer: 'ever' },
        { q: 'It was ___ far the worst movie of the year.', options: ['on', 'by', 'in', 'at'], answer: 'by' }
      ]
    },
    {
      id: 'as_as_so_as',
      name: '3- As ... as / So ... as',
      icon: '⚖️',
      explanation: `**3. As ... as / So ... as (-kadar)**

Benzer iki varlık, durum veya eylem arasında **"-kadar"** anlamı vererek karşılaştırma (eşitlik veya eşitsizlik) yapmak için kullanılır.

- **As ... as:** Hem olumlu hem de olumsuz cümlelerde kullanılabilir.
- **So ... as:** Sadece olumsuz cümlelerde tercih edilir.

**Örnek Cümleler:**
- The former manager was **not as strict as** the new one. (Eski yönetici yenisi kadar katı değildi.)
- Reading makes me **as excited as** travelling. (Okumak beni seyahat etmek kadar heyecanlandırır.)
- The city is **as crowded as** Istanbul. (Şehir, İstanbul kadar kalabalık.) 
- This exam was **not so difficult as** the last one. (Bu sınav, geçenki kadar zor değildi.) 

---

**Katlama Anlamı (Twice, Three times...):**
Bu cümlelere katlama anlamı yüklemek için ilk "as" öncesine **twice** (2 kat), **three times** (3 kat) gibi ifadeler getirilir.

- Reading makes me **twice as excited as** travelling. (Okumak, beni seyahat etmekten 2 kat daha fazla heyecanlandırıyor.)
- My house is **three times as big as** yours. (Benim evim seninkinden üç kat daha büyük.) 

⚠️ **ÖNEMLİ NOT:** Bu yapıda ikinci "as" kelimesinden sonra isim, zamir veya eksik cümle kullanılır; tam cümle (Özne + Fiil) kullanılması gramer olarak tercih edilmez.`,
      quiz: [
        { q: 'She is not ___ tall as her sister.', options: ['so', 'too', 'very', 'much'], answer: 'so' },
        { q: 'This car is twice as expensive ___ that one.', options: ['than', 'as', 'then', 'so'], answer: 'as' },
        { q: 'He plays the guitar as well ___ his father.', options: ['as', 'so', 'to', 'than'], answer: 'as' }
      ]
    },
    {
      id: 'too_to',
      name: '4- Too ... to',
      icon: '🥵',
      explanation: `**4. TOO ... TO (-meyecek kadar ... çok)**

Cümle içinde **"yapılamayacak kadar çok / aşırı"** anlamı veren bu yapı, kendisinden sonra gelen eylemi (fiili) olumsuz etkiler. Yapı **olumlu görünse de anlam her zaman olumsuzdur**.

- The queue is **too long to** wait for. (Kuyruk, beklenecek gibi değil / beklenemeyecek kadar uzun.)
- The tea is **too hot to** drink. (Çay, içilemeyecek kadar sıcak.) 

---

**Önemli Notlar:**

- **Tek Başına "Too":** Sıfat veya zarftan önce yalnız kullanıldığında sadece "aşırı" anlamı verir.
  - It is **too** hot. (Hava aşırı sıcak)
  
- **Cümle Sonunda "Too":** Cümle sonunda kullanıldığında "de, da / dahi" anlamı taşır.
  - I like it **too**. (Ben de severim)

- **Şahıs Ekleme ("For"):** Eylemi kimin yapamadığını belirtmek isterseniz araya **"for"** kullanabilirsiniz:
  - The box is **too heavy for me to** lift. (Kutu, **benim** kaldıramayacağım kadar ağır.)`,
      quiz: [
        { q: 'The coffee is ___ hot to drink.', options: ['very', 'too', 'so', 'much'], answer: 'too' },
        { q: 'This math problem is too complex ___ a child to solve.', options: ['for', 'to', 'from', 'with'], answer: 'for' },
        { q: 'I am too tired ___ walk right now.', options: ['to', 'for', 'so', 'as'], answer: 'to' }
      ]
    },
    {
      id: 'enough_to',
      name: '5- ... Enough to',
      icon: '✅',
      explanation: `**5. ... Enough To (-cek/-cak kadar yeterli)**

Cümle içinde bir eylemi yapmak için **"yeterli"** olma durumunu ifade eder. Bu yapıda "to" kelimesinden sonra fiilin yalın hali (V1) gelir.

⚠️ **Dikkat Edilmesi Gereken Yerleşim Kuralları:**

**1. Sıfat veya Zarf ile:** "Enough" kelimesi sıfat veya zarftan **sonra** gelir.
- The new system is **safe enough to** use in the production. (Yeni sistem, üretimde kullanmak için yeterince güvenli.)
- He is **strong enough to** lift this box. (O, bu kutuyu kaldıracak kadar güçlüdür.)
- She speaks English **well enough to** work in the USA. (O, ABD'de çalışacak kadar iyi İngilizce konuşuyor.)

**2. İsim ile:** "Enough" kelimesi isimden **önce** gelir.
- We have **enough energy to** reach the last point. (Son noktaya ulaşmak için yeterli enerjimiz var.)
- I don't have **enough money to** buy a new car. (Yeni bir araba almak için yeterli param yok.)`,
      quiz: [
        { q: 'He is not ___ to ride this rollercoaster.', options: ['tall enough', 'enough tall', 'too tall', 'so tall'], answer: 'tall enough' },
        { q: 'We do not have ___ to finish the project today.', options: ['time enough', 'enough time', 'too time', 'time so'], answer: 'enough time' },
        { q: 'The water is warm ___ to swim.', options: ['too', 'enough', 'so', 'very'], answer: 'enough' }
      ]
    },
    {
      id: 'so_that',
      name: '6- So ... that',
      icon: '🔗',
      explanation: `**6. SO ... THAT (O kadar ... ki)**

Cümle içinde **"o kadar ... ki"** anlamı verir. "So" ve "that" arasındaki boşluğa sadece sıfat veya zarf gelir. "That" kelimesinden sonra ise mutlaka tam bir cümle (Özne + Fiil + Nesne) kullanılır.

**Kalıp:** So + [Sıfat / Zarf] + That + [Tam Cümle]

- The roads were **so** crowded **that** we could arrive home two hours late. (Yollar o kadar kalabalıktı ki eve iki saat geç varabildik.)
- The weather was **so** cold **that** the lake froze. (Hava o kadar soğuktu ki göl dondu.) 
- He ran **so** fast **that** nobody could catch him. (O kadar hızlı koştu ki kimse onu yakalayamadı.) 

---

**"So ... That" Yapısının İsimle Kullanımı**

Normalde "So"dan sonra doğrudan isim gelmez. Ancak araya miktar belirleyiciler (*many, much, few, little*) girerse isimle birlikte kullanılabilir:

**Kalıp:** So + [many / much / few / little] + [İsim] + That + [Tam Cümle]

- There were **so many errors that** we had to uninstall the programme. (O kadar çok hata vardı ki programı kaldırmak zorunda kaldık.)
- He has **so much money that** he doesn't know how to spend it. (O kadar çok parası var ki nasıl harcayacağını bilmiyor.) 
- There were **so few people that** they cancelled the concert. (O kadar az kişi vardı ki konseri iptal ettiler.)`,
      quiz: [
        { q: 'The movie was ___ boring that I fell asleep.', options: ['too', 'very', 'so', 'enough'], answer: 'so' },
        { q: 'He made so ___ mistakes that he failed the test.', options: ['much', 'many', 'little', 'few'], answer: 'many' },
        { q: 'She spoke so quietly ___ nobody could hear her.', options: ['as', 'that', 'than', 'to'], answer: 'that' }
      ]
    },
    {
      id: 'such_that',
      name: '7- Such ... that',
      icon: '😲',
      explanation: `**7. SUCH ... THAT (Öyle bir ... ki / O kadar ... ki)**

Cümle içinde **"o kadar/öyle bir ... ki"** anlamı verir. "So...that" yapısından en büyük farkı, boşlukta mutlaka bir **isim** (veya sıfat tamlaması) bulunmasıdır.

**Kural:**

**1. Sayılabilen ve tekil isimlerde:**
**Kalıp:** Such + a(n) + (Sıfat) + İsim + That + [Tam Cümle]
- It was **such a big disaster that** hundreds of people lost their lives. (O kadar büyük bir felaketti ki yüzlerce insan hayatını kaybetti.)
- It was **such a boring movie that** I fell asleep. (Öyle sıkıcı bir filmdi ki uyuyakalmışım.) 

**2. Çoğul veya sayılamayan isimlerde:**
**Kalıp:** Such + (Sıfat) + İsim + That + [Tam Cümle]
- They are **such kind people that** everybody loves them. (O kadar nazik insanlar ki herkes onları seviyor.)`,
      quiz: [
        { q: 'It was ___ an amazing book that I read it twice.', options: ['so', 'too', 'such', 'very'], answer: 'such' },
        { q: 'He is ___ a smart boy that he solves everything easily.', options: ['so', 'such', 'very', 'too'], answer: 'such' },
        { q: 'They were ___ difficult questions that nobody could answer them.', options: ['such a', 'such', 'so', 'too'], answer: 'such' }
      ]
    },
    {
      id: 'the_more_the_more',
      name: '8- The more ..., the more ...',
      icon: '📈',
      explanation: `**8. THE MORE ..., THE MORE ... (Ne kadar ..., o kadar ...)**

Cümle içinde iki durumu birbirine bağlayarak **"ne kadar ..., o kadar ..."** anlamı verir. Bu yapıda karşılaştırma ekleri (more veya -er) her iki tarafın da başında **"The"** ile birlikte kullanılır.

💡 **Benzetme:** *"Ne kadar ekmek, o kadar köfte."*

- **The more** you use, **the more** you pay! (Ne kadar çok kullanırsan, o kadar çok ödersin!)
- **The cheaper** it is, **the worse** it is. (Ne kadar ucuzsa, o kadar kötüdür.)
- **The harder** you study, **the more successful** you will be. (Ne kadar sıkı çalışırsan, o kadar başarılı olursun.) 
- **The earlier** we leave, **the sooner** we will arrive. (Ne kadar erken çıkarsak, o kadar çabuk varırız.)`,
      quiz: [
        { q: '___ you read, the more you learn.', options: ['More', 'The more', 'Most', 'Much'], answer: 'The more' },
        { q: 'The faster you drive, ___ dangerous it gets.', options: ['the more', 'more', 'the most', 'too'], answer: 'the more' },
        { q: 'The older we grow, ___ we become.', options: ['the wiser', 'wiser', 'the wisest', 'more wise'], answer: 'the wiser' }
      ]
    }
  ]
};
