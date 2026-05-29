export const question_words = {
  id: 'question_words',
  name: '4- Soru Kelimeleri (Question Words)',
  icon: '❓',
  color: '#FF9933',
  subtopics: [
    {
      id: 'wh_questions',
      name: '1- WH Soru Kelimeleri',
      icon: '🔎',
      explanation: `**Soru Kelimeleri (Question Words)**
İngilizcede detaylı bilgi almak için kullandığımız soru kelimeleridir. Genellikle cümlenin en başında yer alırlar.

- **What:** Ne?
  - What time is it? (Saat kaç?)
- **Where:** Nerede? / Nereye?
  - Where do you live? (Nerede yaşıyorsun?)
- **When:** Ne zaman?
  - When is your birthday? (Doğum günün ne zaman?)
- **Who:** Kim?
  - Who is that man? (Şu adam kim?)
- **Why:** Neden? / Niçin?
  - Why are you crying? (Neden ağlıyorsun?)
- **Which:** Hangi?
  - Which color do you like? (Hangi rengi seversin?)
- **How:** Nasıl?
  - How are you? (Nasılsın?)`,
      quiz: [
        { q: '___ is your favorite color?', options: ['What', 'Who', 'When', 'Where'], answer: 'What' },
        { q: '___ do you go to school? By bus.', options: ['Why', 'Where', 'How', 'Who'], answer: 'How' }
      ]
    },
    {
      id: 'what_which_rules',
      name: '2- Temel Kurallar (What & Which)',
      icon: '🎯',
      explanation: `**Temel Kural**
İngilizcede soru kelimeleri iki temel göreve sahiptir: Soru cümlelerinde soru sormak ve düz cümlelerde iki yan cümleciği birbirine bağlamak.
Soru kelimesi **daima cümlenin en başında** yer alır ve yardımcı fiilden önce kullanılır. *(Not: Cevabı "Evet" veya "Hayır" olan basit sorularda soru kelimesi kullanılmaz.)*

**1. What (Ne / Hangi) & Which (Hangi)**
Bu iki kelime Türkçeye bazen aynı şekilde çevrilse de kullanım mantıkları farklıdır:

- **What (Genel Seçenekler):** Sınırsız seçenek arasından bir şeyi sorarken veya bir şeyin türünü/markasını öğrenmek isterken kullanılır.
  - *What countries are democratic?* (Hangi ülkeler demokratiktir? — Dünyadaki tüm ülkeler arasından soruluyor.)
  - *What color is your car?* (Araban ne renk?)

- **Which (Sınırlı Seçenekler):** Birkaç seçenek arasından tercih yapılması istendiğinde veya işaret ederek cevap verilecek durumlarda kullanılır.
  - *Which one of these is mine?* (Bunlardan hangisi benim?)
  - *Which color is good?* (Hangi renk iyi? — Önümüzdeki seçenekler arasından.)

💡 **Önemli Notlar:**
- **Cevaba Göre Seçim:** Eğer cevap verirken isimler saymanız gerekiyorsa "What", bir şeyi işaret etmeniz gerekiyorsa "Which" ile sormanız daha doğrudur.
- **"One" Kullanımı:** "Which one" ifadesindeki *one* kelimesi sayı olan "bir" değildir; bahsedilen ismi tekrar etmemek için kullanılır (Gerektiğinde "ones" şeklinde çoğul olabilir).
  - *This car is fast. Those ones are bad.* (Bu araba hızlı. Şunlar [şu arabalar] kötü.)
- **"What About" Kalıbı (Öneri / Teklif):** "What" kelimesinin yanına "about" geldiğinde **"Peki ya...?"**, **"...ne dersin?"** anlamında bir öneri kalıbı oluşur.
  - *What about a movie?* (Bir filme ne dersin?)
  - *What about music?* (Müziğe ne dersin?)
  - *What about a dinner?* (Bir yemeğe ne dersin?)
- **What + İsim Kullanımı:** "What" kelimesinin yanına ilgili isimler getirilerek bir şeyin ne tür, ne cins, ne marka, ne renk vb. olduğu da sorulabilir.
  - *What brand is your phone?* (Telefonun ne marka?)
  - *What kind of movies do you watch?* (Ne tür filmler izlersin?)`,
      quiz: [
        { q: 'We have tea or coffee. ___ one do you prefer?', options: ['What', 'Which', 'Why', 'Who'], answer: 'Which' },
        { q: 'I am not hungry yet. ___ a cup of coffee?', options: ['What', 'Where', 'What about', 'Which'], answer: 'What about' },
        { q: 'There are many cars in the world. ___ car brand is the most popular globally?', options: ['Which', 'Where', 'Who', 'What'], answer: 'What' }
      ]
    },
    {
      id: 'what_how_differences',
      name: '3- Detaylı Kalıplar (What & How)',
      icon: '📏',
      explanation: `**"What" ve "How" Soru Kalıplarının Karşılaştırılması**
İngilizcede aynı bilgiyi hem **What** hem de **How** kullanarak sorabiliriz, ancak cümle yapısı buna göre değişir:

- **What Kullanımı:** "What" kelimesi kullanırken asıl soruyu oluşturan kelimenin isim (height, weight, age vb.) olması gerekir ve genellikle cümlenin sonuna gelir.
- **How Kullanımı:** "How" kelimesiyle sorduğumuzda ise yanında gelen ve asıl soruyu oluşturan kelime sıfat (tall, heavy, old vb.) olmalıdır ve soru kelimesinin hemen yanına gelir.

**Örnek Karşılaştırmalar:**
- How tall are you? (Boyun kaç?) ➔ What is your height?
- How heavy are you? (Kaç kilosun?) ➔ What is your weight?
- How old are you? (Kaç yaşındasın?) ➔ What is your age?

**"What" ile Edat (Preposition) Kullanımı**
"What" ile sorulan cümlelerde edatlar kullanılarak sorunun anlamı detaylandırılabilir:
- What is this book about? (Bu kitap ne hakkında?)
- What is there behind the book? (Kitabın arkasında ne var?)
- What is in your house? (Evinin içinde ne / ne var?)

**Tür ve Cins Sorma Kalıpları (Kind of / Sort of)**
Bir şeyin ne tür, ne cins veya ne biçim olduğunu sormak için genellikle işaret zamirleriyle birlikte şu kalıplar kullanılır:
- What kind of a book is that? (Şu ne tür bir kitap?)
- What sort of an apple is this? (Bu ne tür bir elma?)
- What kind of a movie is that? (O ne tür bir film?)

💡 **Önemli Not:** Genellikle bir şeyin cinsini sorarken "sort", türünü sorarken "kind" kullanılması teknik olarak doğrudur. Ancak günümüz İngilizcesinde bu ikisi birbirinin yerine sıkça kullanılmaktadır. "Sort" kullanıldığında bazen "ne biçim / ne tarz" gibi daha vurgulu bir anlam da verebilir.`,
      quiz: [
        { q: '___ tall is your brother?', options: ['What', 'How', 'Which', 'Who'], answer: 'How' },
        { q: '___ kind of music do you like?', options: ['How', 'When', 'What', 'Where'], answer: 'What' },
        { q: 'I want to know her age. So I ask: "___ is your age?"', options: ['What', 'How', 'Which', 'Where'], answer: 'What' }
      ]
    },
    {
      id: 'how_usage_and_patterns',
      name: '4- How Kullanımı ve Kalıpları',
      icon: '🤔',
      explanation: `**How (Nasıl?)**
Bir şeyin durumunu, niteliğini ya da birinin hatırını sormak için kullanılır. "How" ile sorulan sorulara genellikle bir sıfatla cevap verilir.
- How is your father? (Baban nasıl?)
  - My father is fine. (Babam iyidir.)

**"How" Kelimesiyle Kurulan Diğer Kalıplar**

**1. Hatır Sorma:**
Biriyle ilk tanıştığımızda veya karşılaştığımızda nezaketen "How are you?" diyerek hatırını sorarız.

**2. How about (Peki ya...?):**
"How" soru kelimesinin yanına "about" getirildiğinde "Peki ya... / ...nasıl?" anlamına gelir.
- I'm fine, how about you? (Ben iyiyim, peki ya sen?)
- How about your father? (Peki ya baban? [O nasıl?])

**3. Sıfatlarla Kullanım:**
Bir kişinin yaşı, kilosu veya bir şeyin yüksekliği gibi detaylar sıfatlarla birleşerek "How" ile sorulabilir (How old, how heavy, how tall vb.).

💡 **Ek Bilgi: Too ve Either (De/Da)**
Cümle sonlarında "dahi/de/da" anlamında kullanılırlar. Olumlu cümlelerde "too", olumsuz cümlelerde ise "either" kullanılır. Bu kural sabittir.
- I am happy too. (Ben de mutluyum.)
- I am not tired either. (Ben de yorgun değilim.)

**"How" ve "What's ... like?" Arasındaki Farklar**
İngilizcede bir şeyin "nasıl" olduğunu sormak için iki farklı kalıp kullanılır ve bunlar farklı odak noktalarına sahiptir:

- **How:** Bir şeyin mevcut durumunu veya belli bir süre içindeki (geçici) halini sormak için kullanılır.
  - How is your work nowadays? (Bugünlerde işin nasıl?)

- **What's ... like?:** Bir şeyin genel özelliklerini, karakterini veya neye benzediğini sormak için kullanılır.
  - What's the climate like in Türkiye? (Türkiye'de iklim nasıldır? [Genel karakteri])
  - What's a lion like? (Bir aslan nasıldır? [Neye benzer, özellikleri nelerdir?])
  - What is she like? (O nasıl biri? [Karakter olarak: Nazik mi, sert mi vb.])`,
      quiz: [
        { q: 'I am not hungry ___.', options: ['too', 'also', 'either', 'neither'], answer: 'either' },
        { q: '___ is your city like?', options: ['How', 'What', 'Where', 'Which'], answer: 'What' },
        { q: 'I am doing great, ___ about you?', options: ['What', 'Where', 'How', 'Who'], answer: 'How' }
      ]
    },
    {
      id: 'other_wh_words_and_phrases',
      name: '5- Diğer Soru Kelimeleri ve Tamlamalar',
      icon: '🧩',
      explanation: `**1. Who (Kim) / Whom (Kimi) / Whose (Kimin)**
İngilizcede kişileri ve aidiyet durumlarını sormak için bu üç yapı kullanılır:

- **Who (Kim):** Birinin kimliğini sormak için kullanılır.
  - Who is that man? (Şu adam kim?)
- **Whom (Kime / Kimi):** Yönelim bildiren sorularda (eylemden etkilenen kişiyi sorarken) kullanılır.
  - Whom are you writing to? (Kime yazıyorsun?)
- **Whose (Kimin):** Bir şeyin kime ait olduğunu sormak için kullanılır. Eğer bir nesneden bahsediliyorsa, nesne ismi "whose" kelimesinin hemen yanına gelir.
  - Whose is this? (Bu kimin?)
  - Whose book is this? (Bu kitap kimin?)
  - Whose is that one? (Şu [şey] kimin?)

**2. When (Ne Zaman) & Where (Nerede / Nereye)**
- **When (Ne zaman):** Zaman sormak için kullanılır.
  - When is the meeting? (Toplantı ne zaman?)
- **Where (Nerede / Neresi / Nereye):** Kullanıldığı yere göre farklı anlamlar kazanabilir:
  - Where is your house? (Evin nerede? ➔ Konum)
  - Where is Ankara? (Ankara neresi? ➔ Tanım)
  - Where is Ahmet going? (Ahmet nereye gidiyor? ➔ Yönelim)

**3. Why (Neden) & What for (Ne için)**
Sebep ve amaç sormak için kullanılırlar:

- **Why (Neden):** Sebep veya nedenini sormak için kullanılır.
  - Why are you here? (Neden buradasın?)
- **What ... for? (Ne için):** Bir şeyin amacını sormak için kullanılır. Bu yapıda "What" cümlenin başında, "for" ise cümlenin sonunda yer alır.
  - What is this pen for? (Bu kalem ne için?)

**4. Cevap İfadeleri ve Tamlamalar**
Soru kelimeleriyle sorulan cümlelere genellikle zamirlerle cevap verilir:
- What is this? (Bu nedir?)
  - It is a calculator. (O bir hesap makinesidir.)

💡 **Hatırlatma (Tamlama Mantığı):**
Tanım cümlelerinde yardımcı fiili (am-is-are-was-were) kaldırdığınızda ifade bir "isim tamlamasına" dönüşür.
- Cümle: That man is in the picture. (O adam resimdedir.)
- Tamlama: That man in the picture... (Resimdeki şu adam...)`,
      quiz: [
        { q: '___ are you writing to?', options: ['Who', 'Whom', 'Whose', 'What'], answer: 'Whom' },
        { q: '___ phone is this?', options: ['Whose', 'Who', 'Whom', 'What'], answer: 'Whose' },
        { q: '___ is this machine used for?', options: ['Why', 'Where', 'What', 'How'], answer: 'What' }
      ]
    },
    {
      id: 'would_you_like',
      name: '6- Would you like? (İster misiniz?)',
      icon: '☕',
      explanation: `**Would you like? (İster misiniz?)**
"Would you like", birine bir şey teklif ederken veya bir şey isteyip istemediğini nazikçe sorarken kullanılan "İster misiniz / Arzu eder misiniz?" anlamındaki kalıptır.

**A) Olumlu Öneri Sorusu**
Bu kalıpla cümleye başlanır ve devamında bir miktar ifadesiyle birlikte önerilen şeyin adı kullanılır.
- Would you like a cup of coffee? (Bir fincan kahve ister miydin?)
- Would you like some orange juice? (Biraz portakal suyu ister misiniz?) 

💡 **Önemli Notlar:**
- İngilizcede "siz" ve "sen" ayrımı olmadığı için bu kalıp her iki durum için de aynıdır.
- Bu kalıbın devamında bir fiil (eylem) kullanılacaksa, fiil mutlaka **"to"** ile birlikte mastar haliyle getirilir.
  - Would you like **to have** a walk? (Bir yürüyüş yapmak ister misin?)
  - Would you like **to join** us for dinner? (Akşam yemeği için bize katılmak ister misiniz?) 
  - Would you like **to watch** a movie? (Bir film izlemek ister misin?) 

**B) Olumsuz Sorular**
"Would you like" bir öneri kalıbı olduğu için genellikle olumlu kullanılır. Ancak **"İstemez miydin?"** anlamı katmak için **"Wouldn't you like"** şeklinde de kurulabilir.
- Would you like some donuts? (Çörek ister miydin? — *Normal öneri*)
- Oh, wouldn't you like some donuts now? (Ah, şimdi çöreğimiz olsun istemez miydin? — *İstek uyandıran öneri*)

**Diğer Şahıslarla Kullanım**
Bu kalıp sadece "you" ile sınırlı değildir; diğer öznelerle de (he, she, they) kullanılabilir:
- Would they like to swim in the pool? (Havuzda yüzmek isterler mi?)
- Would he like a glass of water? (O bir bardak su ister mi?)`,
      quiz: [
        { q: '___ you like a cup of tea?', options: ['Do', 'Are', 'Would', 'Can'], answer: 'Would' },
        { q: 'Would you like ___ watch a movie?', options: ['to', 'for', 'in', 'at'], answer: 'to' },
        { q: 'Oh, ___ you like some donuts now?', options: ['would', "wouldn't", 'do', "don't"], answer: "wouldn't" }
      ]
    },
    {
      id: 'would_you_mind',
      name: '7- Would you mind? (Rica ve İzin Soruları)',
      icon: '🤝',
      explanation: `**Would you mind? (Rica ve İzin Soruları)**
Birinden bir şey yapmasını rica ederken veya bir şey yapmak için izin isterken "Sakıncası yoksa..." veya "Sizin için sakıncası var mı?" anlamında bu kalıpları kullanırız.

**1. Birinden Rica Etmek (Would you mind + Fiil-ing)**
Bir başkasının bir eylemi yapmasını rica ettiğimizde kullanılır. Bu kalıptan sonra gelen fiil her zaman **"-ing"** takısı alır.
- Would you mind **opening** the window? (Sakıncası yoksa pencereyi açar mısınız?)
- Would you mind **waiting** for a moment? (Sakıncası yoksa bir dakika bekler misiniz?)
- Would you mind **speaking** a bit louder? (Sakıncası yoksa biraz daha yüksek sesle konuşur musunuz?)

*Kalıp: Would you mind | Fiil (-ing) | Cümlenin geri kalanı*

**2. İzin İstemek (Would you mind if...?)**
Kendi yapacağımız bir işin başkası için sakıncası olup olmadığını sorduğumuzda kullanılır. "if" kelimesinden sonra bir özne (I, you, my book vb.) gelir.
- Would you mind if **I open** the window? (Pencereyi açsam rahatsız olur musun / sakıncası var mı?)
- Would you mind if **I sit** here? (Buraya otursam sakıncası olur mu?)

**Önemli Notlar:**

- **Özne Çeşitliliği:** Bu kalıpta soru başka biri veya bir şey için de sorulabilir:
  - Would you mind if **my book stays** here? (Sakıncası yoksa kitabım burada durabilir mi?)
- **Zaman Kuralı:** "if" kelimesinden sonra gelen cümle Geniş Zaman (**Present Simple**) yapısındadır.
  - *Olumlu:* Would you mind | if | Özne | Fiil (Geniş Zaman)
  - *Olumsuz:* Would you mind | if | Özne | don't / doesn't | Fiil
  - *Örnek:* Would you mind if I **don't come** today? (Bugün gelmesem sakıncası olur mu?)

💡 **Çok Kritik Hatırlatma (Cevap Verme)**
"Would you mind" (Sakıncası var mı?) sorusuna "Evet" derseniz "Evet, sakıncası var (yapma)" demiş olursunuz. Bu yüzden onay verirken genellikle şu cevaplar kullanılır:
- **No, not at all.** (Hayır, hiç sakıncası yok.)
- **No, of course not.** (Hayır, tabii ki yok / yapabilirsin.)`,
      quiz: [
        { q: 'Would you mind ___ the window?', options: ['open', 'opening', 'to open', 'opened'], answer: 'opening' },
        { q: 'Would you mind if I ___ here?', options: ['sit', 'sitting', 'sat', 'sits'], answer: 'sit' },
        { q: 'A: Would you mind if I use your pen? B: ___ (Sure, go ahead)', options: ['Yes, I mind.', 'No, not at all.', 'Yes, of course.', 'I mind it.'], answer: 'No, not at all.' }
      ]
    },
    {
      id: 'do_you_think',
      name: '8- Do you think? (Fikir Sorma)',
      icon: '💭',
      explanation: `**Do you think? (Fikir Sorma Kalıbı)**
"Do you think...?" kalıbı, geniş zamanda kurulan ve karşınızdakine fikrini sormak için kullanılan bir yapıdır. Türkçeye "Sizce ... mı?", "Sizce ... olur mu?" veya "Sizce ... midir?" şeklinde çevrilir.

**1. Sakınca ve Uygunluk Sorma**
Bir durumla ilgili sakınca olup olmadığını sormak için "Is it okay if" veya "Is it a problem if" kalıplarıyla "Do you think" kalıbını birleştirebilirsiniz.
*Kural:* İki kalıp birleştiğinde, ikinci kısım düz cümle olarak kullanılır ve başına "if" eklenir.

*Kalıp: Do you think it's okay if / Do you think it's a problem if + Özne + Geniş Zamanda Fiil + Cümlenin geri kalanı*

- Do you think it's okay if **they go** to bed late at night? (Sizce gece geç yatmalarında bir sakınca olur mu?)
- Do you think it's a problem if **I park** my car here? (Sizce arabamı buraya park etmem bir sorun olur mu?)
- Do you think it's okay if **we start** the meeting earlier? (Sizce toplantıya daha erken başlamamız uygun olur mu?)

**2. Olumsuz Soru Kipi (Don't you think?)**
Bu kalıbı olumsuz şekilde de kullanmak mümkündür. "Don't you think" kullanıldığında "Sizce de ... olmaz mı / değil mi?" anlamını katar.
- **Don't** you think it's okay if **they go** to bed late at night? (Sizce gece geç yatmalarında bir sakınca olmaz mı?)
- **Don't** you think it's a problem if **he forgets** the meeting? (Sizce toplantıyı unutması bir sorun teşkil etmez mi?) 

*Kalıp: Don't you think it's okay if / Don't you think it's a problem if + Özne + Geniş Zamanda Fiil + Cümlenin geri kalanı*

**3. Doğrudan Eylem / Durum Sormak**
Bazen sormanız gereken şey bir kalıp değil, doğrudan bir eylem veya durum olabilir. Bu durumda sormak istediğiniz cümleyi kendi zamanında, düz ve olumlu bir cümle gibi kurar, başına "do you think" / "don't you think" eklersiniz.
- Do you think **Linda will come** here? (Sizce Linda buraya gelecek mi?)
- Do you think **they finished** the project? (Sizce projeyi bitirdiler mi?) 

*Kalıp: (Do / Don't) you think + Özne + İlgili zamanda kurulan düz cümle*

**4. Düşünce Belirtme ve Cümle Yapıları (I think...)**
Sorulara fikir belirtirken "I think" yapısıyla başlar, devamında ilgili zamanda düz bir cümle kurarız (He thinks, they think gibi diğer öznelerle de kullanılır).

Fikir belirtirken olumluluk/olumsuzluk 4 farklı tarzda yapılabilir:
- **Olduğunu düşünüyor (Olumlu - Olumlu):** *He thinks the car is good.* (Arabanın iyi olduğunu düşünüyor.)
- **Olmadığını düşünüyor (Olumlu - Olumsuz):** *He thinks the car isn't good.* (Arabanın iyi olmadığını düşünüyor.)
- **Olduğunu düşünmüyor (Olumsuz - Olumlu):** *He doesn't think the car is good.* (Arabanın iyi olduğunu düşünmüyor.)
- **Olmadığını düşünmüyor (Olumsuz - Olumsuz):** *He doesn't think the car isn't good.* (Arabanın iyi olmadığını düşünmüyor.)

💡 **NOT:** Öznenin gerektirdiği durumlarda (He, She, It) geniş zamanda fiile "s" takısı (thinks) eklendiğini ve olumsuzda "doesn't think" kullanıldığını unutmayın.`,
      quiz: [
        { q: '___ you think it is okay if I sit here?', options: ['Are', 'Do', 'Would', 'Can'], answer: 'Do' },
        { q: "Don't you think it is a problem if ___ the meeting?", options: ['he forget', 'he forgets', 'he forgetting', 'he forgot'], answer: 'he forgets' },
        { q: 'He thinks the car ___ good.', options: ["isn't", "don't", "doesn't", 'not'], answer: "isn't" }
      ]
    },
    {
      id: 'question_tags',
      name: '9- Onay Soruları (Question Tags)',
      icon: '✅',
      explanation: `**Onay Soruları (Question Tags)**
İngilizcede bir cümleyi onaylatmak için *(Değil mi? / Öyle değil mi?)* kullanılan yapılardır. Temel kural; cümle hangi yardımcı fiille kurulmuşsa, onay sorusunda onun **ters hali** ve **öznenin zamiri** kullanılır.

**1. Standart Onay Soruları**
Cümle olumluysa onay kısmı olumsuz, cümle olumsuzsa onay kısmı olumlu olur.
- This hotel is cheap, **isn't it**? (Bu otel ucuz, değil mi?)
- You are coming with us, **aren't you**? (Bizimle geliyorsun, değil mi?) 
- They weren't at home, **were they**? (Evde değillerdi, değil mi?) 

**2. "Right?" (Doğru mu?)**
Yardımcı fiil kuralıyla uğraşmadan, her türlü cümle için "doğru mu / değil mi" anlamında günlük dilde çok sık kullanılır.
- This hotel is cheap, **right**? (Bu otel ucuz, doğru mu?)
- We have a meeting tomorrow, **right**? (Yarın toplantımız var, doğru mu?)

**3. "No?" ve "Yes?"**
Genellikle cümlenin sonuna eklenerek "değil mi?" veya "hayır desene / evet desene" gibi bir beklentiyle kullanılır. Daha samimi ve vurgulu bir tondur.
- This hotel is cheap, **no**? (Bu otel ucuz, değil mi / hayır desene?)
- It is a beautiful day, **yes**? (Güzel bir gün, evet mi / değil mi?)`,
      quiz: [
        { q: "You are coming with us, ___ you?", options: ['are', "aren't", 'do', "don't"], answer: "aren't" },
        { q: "They weren't at home, ___ they?", options: ['were', "weren't", 'are', "aren't"], answer: 'were' },
        { q: 'We have a meeting tomorrow, ___?', options: ['right', 'wrong', 'no', 'are we'], answer: 'right' }
      ]
    }
  ]
};
