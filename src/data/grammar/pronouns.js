export const pronouns = {
  id: 'pronouns',
  name: '2- Pronouns (Zamirler)',
  icon: '👤',
  color: '#33CCFF',
  subtopics: [
    {
      id: 'subject_pronouns',
      name: '1- Özne Zamirleri (Subject Pronouns)',
      icon: '🎭',
      explanation: `**Özne Zamirleri (Subject Pronouns)**
İngilizcede bir cümleye başlarken "Kim?" sorusunun cevabıdır. İsmin (Ömer, kedi, okul vb.) yerini tutarlar.

**Zamirler ve Anlamları**
| **Zamir (English)** | **Türkçe Karşılığı** | **Kullanım Alanı** |
| I | Ben | Her zaman büyük harfle yazılır. |
| You | Sen / Siz | Hem tekil hem çoğul için aynıdır. |
| He | O (Erkek) | Erkek bireyler için kullanılır. |
| She | O (Kadın) | Kadın bireyler için kullanılır. |
| It | O (Cansız/Hayvan) | Nesneler, hayvanlar ve durumlar için kullanılır. |
| We | Biz | Konuşan kişiyi de kapsayan grup. |
| They | Onlar | Bahsedilen çoğul kişiler veya nesneler. |

**Örnek Cümleler (Tanımlama)**
Daha önce öğrendiğimiz am-is-are yapısıyla bu zamirleri birleştirelim:
- I am a developer. (Ben bir yazılımcıyım.)
- You are very kind. (Sen çok naziksin. / Siz çok naziksiniz.)
- He is my father. (O benim babamdır.)
- She is at work. (O iştedir.)
- It is a fast car. (O hızlı bir arabadır.)
- We are a team. (Biz bir takımız.)
- They are in Istanbul. (Onlar İstanbul'dalar.)

**Kritik Notlar**
• **"I" Her Zaman Büyük:** Cümlenin neresinde olursa olsun "I" (ben) kelimesi her zaman büyük harfle yazılır.
  - Doğru: My friend and I...
• **"It" Sadece Cansız Değil:** Hava durumu, zaman ve mesafe belirtirken de "It" kullanılır.
  - Örnek: It is sunny today. (Bugün hava güneşli.)
• **"You" İkililiği:** Karşındaki tek bir kişiye de "You" dersin, koca bir sınıfa da "You" dersin. Yardımcı fiili her zaman "are" veya "were" olur.`,
      quiz: [
        { q: 'Ali is my friend. ___ is a good person.', options: ['She', 'He', 'It', 'I'], answer: 'He' },
        { q: 'My sister and I are students. ___ study together.', options: ['They', 'You', 'We', 'She'], answer: 'We' },
        { q: 'Where are the keys? ___ are on the table.', options: ['It', 'He', 'They', 'We'], answer: 'They' }
      ]
    },
    {
      id: 'possessive_pronouns',
      name: '2- İyelik Zamirleri (Possessive Pronouns)',
      icon: '🧲',
      explanation: `**İyelik Zamirleri (Possessive Pronouns)**
Bir nesnenin kime ait olduğunu belirtirken ismin tekrar edilmesini önlemek için kullanılır. (Örn: "Benim arabam" yerine kısaca "Benimki" demek gibi.)

**Zamirler Tablosu**
| **İyelik Sıfatı (Possessive Adjective)** | **İyelik Zamiri (Pronoun)** | **Türkçe Karşılığı** |
| my (benim) | **mine** | benimki |
| your (senin) | **yours** | seninki / sizinki |
| his (onun) | **his** | onunki (erkek) |
| her (onun) | **hers** | onunki (kadın) |
| its (onun) | **-** | (Cansız varlıklarda kullanılmaz) |
| our (bizim) | **ours** | bizimki |
| their (onların) | **theirs** | onlarınki |

**Örnek Cümleler**
Cümlede ismin yerini tamamen alırlar:
- This is my car. ❌ *(Eğer arabadan bahsettiğimiz zaten belliyse "car" demeye gerek yoktur.)*
- This is **mine**. ✅ (Bu benimkidir / benimdir.)
- Is this pen **yours** or **mine**? (Bu kalem seninki mi yoksa benimki mi?)
- Their house is bigger than **ours**. (Onların evi bizimkinden daha büyük.)

**Kritik Notlar**
• İyelik zamirlerinden (mine, yours, theirs vb.) sonra **asla bir isim kelimesi gelmez**. İsim kullanacaksanız iyelik sıfatı (my, your vb.) kullanmanız gerekir.
  - Doğru: That is **my** bag.
  - Doğru: That bag is **mine**.
  - Yanlış: That is mine bag.
• **Yardımcı fiil seçimi (is / are):** Sahip olunan nesnenin sayısına göre belirlenir.
  - Tekil nesne ise "is": My car is blue. (Arabam mavidir.)
  - Çoğul nesne ise "are": My cars are blue. (Arabalarım mavidir.)
• **İsimlerin Sahiplik Eki ('s):** Zamir (my, your vb.) kullanılmadığında, özel isimlerin veya cins isimlerin sonuna **'s** getirilerek sahiplik anlamı (..’nın/..’nin) katılır.
  - Özel İsim: John's car (John’un arabası)
  - Cins İsim: The dog's house (Köpeğin kulübesi)`,
      quiz: [
        { q: 'Is this jacket ___?', options: ['your', 'you', 'yours', 'yours jacket'], answer: 'yours' },
        { q: 'This is not my umbrella. ___ is blue.', options: ['Mine', 'My', 'Me', 'I'], answer: 'Mine' },
        { q: 'We bought this house. It is ___.', options: ['our', 'ours', 'us', 'we'], answer: 'ours' }
      ]
    },
    {
      id: 'demonstrative_pronouns',
      name: '3- İşaret Zamirleri (Demonstrative Pronouns)',
      icon: '👉',
      explanation: `**İşaret Zamirleri (Demonstrative Pronouns)**
Nesneleri veya kişileri işaret ederek tanımlamak için kullanılırlar.

**1. Tekil İşaret Zamirleri (This & That)**
Yakındaki veya uzaktaki tek bir varlığı belirtir. Tekil oldukları için her zaman "is" (veya geçmişte "was") yardımcı fiili ile kullanılırlar.

- **This** is thin. (Bu incedir.) -> Yakındaki nesne
- **That** is thick. (O kalındır.) -> Uzaktaki nesne

**Tanımlama Kalıbı:** Cümleye "**This is / That is**" ile başlanır ve arkasından nesnenin ismi gelir:
- This is a book. (Bu bir kitaptır.)
- That is a car. (Şu/O bir arabadır.)

**2. Çoğul İşaret Zamirleri (These & Those)**
Birden fazla varlığı belirtirler. Yardımcı fiilleri her zaman "are" (veya geçmişte "were") şeklindedir.

- **These** are books. (Bunlar kitaptır.) -> Yakındaki çoğullar
- **Those** are books. (Şunlar kitaptır.) -> Uzaktaki çoğullar
- These are the books. (Bunlar [o bilinen] kitaplar.)
- Those are the books. (Şunlar [o bilinen] kitaplar.)

💡 **Önemli Notlar**
- **İyelik Kullanımı:** İşaret zamirleri kullanılırken "the" veya "a/an" artikellerinin yerine iyelik zamiri (my, your vb.) gelebilir:
  - These are my books. (Bunlar benim kitaplarım.)
  - Is that your car? (Şu senin araban mı?)
- **Çoğul Uyumu:** Çoğul işaret zamiri (These/Those) kullanıldığında, arkasından gelen isim de mutlaka çoğul (-s takısı) olmalıdır.

**Soru Cümleleri**
Bir şeyi işaret ederek soru sormak için yardımcı fiil (is/are) cümlenin başına, işaret zamirinin önüne gelir:
- Is this a pen? (Bu bir kalem mi?)
- Is that your house? (Şu senin evin mi?)
- Are these your keys? (Bunlar senin anahtarların mı?)
- Are those flowers for me? (Şunlar/Onlar benim için mi çiçekler?)
- Was that a dog? (O bir köpek miydi?)

**Kısaca Özet:**
| **Kelime** | **Anlamı** | **Sayı** | **Mesafe** | **Yardımcı Fiil** |
| :--- | :--- | :--- | :--- | :--- |
| **This** | Bu | Tekil | Yakın | is / was |
| **That** | Şu / O | Tekil | Uzak | is / was |
| **These** | Bunlar | Çoğul | Yakın | are / were (+ "s") |
| **Those** | Şunlar / Onlar | Çoğul | Uzak | are / were (+ "s") |`,
      quiz: [
        { q: 'Look at ___ bright star in the sky!', options: ['this', 'that', 'these', 'those'], answer: 'that' },
        { q: 'Are ___ your keys on the table over there?', options: ['this', 'that', 'these', 'those'], answer: 'those' },
        { q: '___ is my brother right here next to me.', options: ['This', 'That', 'These', 'Those'], answer: 'This' }
      ]
    },
    {
      id: 'indefinite_pronouns',
      name: '4- Belgisiz Zamirler (Indefinite Pronouns)',
      icon: '❓',
      explanation: `**Belgisiz Zamirler (Indefinite Pronouns)**
İsimlerin yerine kullandığımız ve kimden ya da hangi şeyden bahsedildiği tam olarak net olmayan zamirler grubudur.

**1. "Every" Grubu (Her/Hepsi)**
- **Everybody / Everyone:** Herkes
- **Everything:** Her şey
- **Everywhere:** Her yer

**2. "Any" Grubu (Hiç / Her)**
- **Anybody / Anyone:** Hiç kimse (olumsuzda) / Herhangi biri (olumluda)
- **Anything:** Hiçbir şey (olumsuzda) / Herhangi bir şey (olumluda)
- **Anywhere:** Hiçbir yer (olumsuzda) / Herhangi bir yer (olumluda)

**3. "Some" Grubu (Biri / Bir şey)**
- **Somebody / Someone:** Birileri / Birisi
- **Something:** Bir şeyler / Bir şey
- **Somewhere:** Bir yerler / Bir yer

**4. "No" Grubu (Hiçbiri - Olumlu cümlede olumsuz anlam)**
- **Nobody / No one:** Hiç kimse
- **Nothing:** Hiçbir şey
- **Nowhere:** Hiçbir yer

💡 **Önemli Notlar**
- **Anlam Farkı:** "Any" kelimesinin "hiç" anlamının yanında, olumlu cümlelerde kullanıldığında "her / herhangi" anlamı da vardır.
  - Örnek: You can ask anybody. (Herhangi birine sorabilirsin.)
- **Tekil Kuralı:** Bu zamirlerin tamamı özne olduklarında tekil kabul edilir. Yani yardımcı fiil olarak "is" veya "was" alırlar.
  - Örnek: Everybody is happy. (Herkes mutludur. — Everybody are denmez.)
- **No Grubu Kuralı:** "No" ile başlayan zamirler zaten olumsuzluk içerdiği için cümledeki fiil olumlu yapıda kurulur.
  - Örnek: Nothing is impossible. (Hiçbir şey imkansız değildir.)`,
      quiz: [
        { q: 'I heard a knock on the door. Is ___ there?', options: ['anybody', 'nobody', 'everybody', 'somebody'], answer: 'anybody' },
        { q: '___ is perfect. We all make mistakes.', options: ['Everybody', 'Nobody', 'Somebody', 'Anybody'], answer: 'Nobody' },
        { q: 'I am so hungry. I want ___ to eat.', options: ['everything', 'anything', 'nothing', 'something'], answer: 'something' }
      ]
    },
    {
      id: 'reflexive_pronouns',
      name: '5- Dönüşlü Zamirler (Reflexive Pronouns)',
      icon: '🔄',
      explanation: `**Dönüşlü Zamirler (Reflexive Pronouns)**
Zamirlerin sonuna eklenerek cümleye "kendi" anlamı katarlar. Tekil şahıslarda "-self", çoğul şahıslarda "-selves" eki kullanılır.

**Şahıslara Göre Zamirler**
- **I myself:** Kendim
- **You yourself:** Kendin (Tekil)
- **He himself:** Kendisi (Erkek)
- **She herself:** Kendisi (Kadın)
- **It itself:** Kendisi (Cansız/Hayvan)
- **We ourselves:** Kendimiz
- **You yourselves:** Kendiniz (Çoğul)
- **They themselves:** Kendileri

**Örnek Cümleler:**
- We all trust **ourselves**. (Biz hepimiz kendimize güveniyoruz.)
- The man believes in **himself**. (Bu adam kendine inanıyor.)
- Nobody does harm to **themselves**. (Hiç kimse kendine zarar vermez.)

💡 **"By" Edatı ile Kullanım**
Bu ifadeler "by" ile kullanıldıklarında "kendi başına / tek başına / kimseden yardım almadan" anlamı verirler.

- **By myself:** Kendi kendime
- **By yourself:** Kendi kendine
- **By himself:** Kendi kendine
- **By herself:** Kendi kendine
- **By itself:** Kendi kendine
- **By ourselves:** Kendi kendimize
- **By yourselves:** Kendi kendinize
- **By themselves:** Kendi kendilerine

**Örnek Cümleler:**
- I always prefer preparing for the exams **by myself**. (Sınavlara kendi kendime hazırlamayı tercih ederim.)
- European countries are managing their economy **by themselves**. (Avrupa ülkeleri ekonomilerini kendi kendilerine yönetiyorlar.)`,
      quiz: [
        { q: 'She made this delicious cake completely by ___.', options: ['herself', 'himself', 'yourself', 'myself'], answer: 'herself' },
        { q: "We don't need any help, we can do it ___.", options: ['ourselves', 'themselves', 'yourselves', 'myself'], answer: 'ourselves' },
        { q: 'Did you fix the computer by ___, or did someone help you?', options: ['yourself', 'himself', 'myself', 'itself'], answer: 'yourself' }
      ]
    },
    {
      id: 'dummy_it',
      name: '6- Dummy It & There (Sahte Özneler)',
      icon: '👻',
      explanation: `**Dummy Özneler (Dummy Subjects)**
"Dummy it" (sahte/yapay it), İngilizcede cümlede özne eksikliğini gidermek için kullanılan, gerçek bir anlamı veya referansı olmayan gramer amaçlı bir yapıdır.

İngilizcede her cümlenin bir özneye ihtiyacı vardır. Ancak bazı durumlarda, cümlede üzerinde konuşacağımız somut bir kişi veya nesne (O) bulunmaz. İşte bu durumlarda, dil bilgisi kurallarını sağlamak ve cümleyi tamamlamak için "Dummy" (sahte/dolgu) özneler olan "It" ve "There" kullanılır.

**1. Dummy "It" (Durum Bildirimi)**
"It" kelimesi burada bir nesneyi (O) karşılamaz; sadece bir durumun, zamanın veya atmosferin var olduğunu belirtmek için kullanılır.

- **Hava Durumu:** It is extremely hot today. (Bugün hava aşırı sıcak.)
- **Zaman:** It is nearly midnight. (Neredeyse gece yarısı.)
- **Tarih:** It is Monday. (Bugün Pazartesi.)
- **Mesafe:** It is a long way to the airport. (Havaalanına uzun bir yol var.)
- **Ekstrapozisyon:** It is hard to solve this problem. (Bu problemi çözmek zor.)

💡 **Dikkat:** Buradaki "It", gerçek bir şeyi ifade eden üçüncü şahıs zamiri olan "It" ile karıştırılmamalıdır. Dummy "It" cümlede sadece bir "doldurucu" görevi görür.

**2. Dummy "There" (Varoluş Bildirimi)**
"There" kelimesi, bir şeyin var olduğunu veya bir yerde bulunduğunu (varlık/yokluk) belirtmek için "Dummy" özne olarak kullanılır.

- **Varlık:** There is a mistake in your report. (Raporunda bir hata var.)
- **Geçmiş Varlık:** There were five students in the classroom. (Sınıfta beş öğrenci vardı.)
- **Gelecek Olasılığı:** There is going to be a concert tonight. (Bu akşam bir konser olacak.)

🎯 **Farkı Anla:** "There" belirli bir durumun varlığını tanıtırken; "It" o durumun niteliklerini (hava, saat, uzaklık) tanımlar.

**Özet Karşılaştırma Tablosu**

| **Özellik** | **Dummy "It"** | **Dummy "There"** |
| :--- | :--- | :--- |
| **Temel İşlevi** | Durum (Hava, Saat, Tarih) | Varoluş (Varlık/Yokluk) |
| **Anlamı** | "O" (referansı yok) | "Var/Mevcut" |
| **Örnek** | It is cold. | There is a cat. |`,
      quiz: [
        { q: '___ is raining heavily outside.', options: ['It', 'There', 'This', 'That'], answer: 'It' },
        { q: '___ are three apples on the table.', options: ['It', 'There', 'They', 'These'], answer: 'There' },
        { q: '___ is very important to learn grammar.', options: ['There', 'It', 'He', 'She'], answer: 'It' }
      ]
    }
  ]
};
