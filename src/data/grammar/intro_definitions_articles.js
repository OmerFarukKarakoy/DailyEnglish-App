export const intro_definitions_articles = {
  id: 'intro_definitions_articles',
  name: '1- Introduction: Definition Sentences and Articles (Giriş: Tanım Cümleleri ve Artikeller)',
  icon: '🏁',
  color: '#FFD700',
  subtopics: [
    {
      id: 'articles_a_an_the',
      name: '1- Articles (Artikeller)',
      icon: '🔤',
      explanation: `**1. Artikeller (A, An, The)**
İsimleri belirtmek için kullanılırlar.

**Belirsiz Tanım Cümlelerinde:**
- Özne öncesi "A veya An"
- Genelleme yaparken kullanılır. (Bir elma, herhangi bir doktor).
- Kural: Kelime sesli harfle (okunuşuna göre) başlıyorsa "an", sessizle başlıyorsa "a" gelir.
- İpucu: "Dünyadaki hepsi mi/herhangi biri mi?" sorusuna "Evet" diyorsan bunu kullan.
- Örnekler:
I am a doctor. (Ben bir doktorum. - Herhangi bir doktor)
It is an apple. (O bir elmadır. - Herhangi bir elma)
This is an honest man. (Bu dürüst bir adamdır. - H harfi okunmadığı için "an" gelir)

**Belirli Tanım Cümlelerinde:**
- Özne öncesi "the"
- Bilinen, belirli bir gruptan veya nesneden bahsederken kullanılır.
- İpucu: "Dünyadaki hepsi mi?" sorusunun cevabı "Hayır, sadece şu bildiğimiz olan" ise the kullanılır.
- Örnekler:
The apple is red. (Elma kırmızıdır. - Masadaki veya bahsettiğimiz o elma)
The cars are fast. (Arabalar hızlıdır. - Belirli bir gruptaki arabalar)

**Not:** Öznenin başına "the" veya "a/an" hangisinin geldiğini anlamak için "Dünyadaki hepsi mi?" sorusu sorulur. Sorunun cevabı hayırsa "the", evetse "a/an" getirilir.
**Not:** Şahıs isimleri (Ömer, Ali) ve şahıs zamirleri (I, You) artikel almaz.
- Yanlış: The Ömer / A You
**Not:** İngilizcede mesleklerden önce mutlaka "a/an" kullanılır.
- Örnek: I am a student.

**Farkı Anla:**
"I want a book." (Herhangi bir kitap istiyorum, fark etmez.)
"I want the book." (O kitabı istiyorum, hani konuşmuştuk ya o.)`,
      quiz: [
        { q: 'I want ___ book. (herhangi bir kitap)', options: ['a', 'an', 'the', 'no article'], answer: 'a' },
        { q: '___ apple is red. (masadaki elma)', options: ['A', 'An', 'The', 'no article'], answer: 'The' },
        { q: 'This is ___ honest man.', options: ['a', 'an', 'the', 'no article'], answer: 'an' },
      ],
    },
    {
      id: 'definition_sentences',
      name: '2- Definition Sentences (Tanım Cümleleri)',
      icon: '📝',
      explanation: `**1. Olmak Fiili (Am - Is - Are)**
İngilizcede içinde eylem (gitmek, koşmak, yemek vb.) olmayan, durum, meslek veya özellik bildiren tanım cümlelerinde "am-is-are" kelimeleri kullanılır.

**Özne - Yardımcı Fiil Tablosu**
| **Özne (Subject)** | **Yardımcı Fiil (To Be)** | **Kısaltma (Contraction)** |
| I | am | I'm |
| You | are | You're |
| He | is | He's |
| She | is | She's |
| It | is | It's |
| We | are | We're |
| They | are | They're |

**Olumlu Cümleler**
Özneden hemen sonra uygun yardımcı fiil getirilir.
- I am a teacher. (Ben bir öğretmenim.)
- He is cold. (O üşüyor / O soğuk.)
- They are at home. (Onlar evdeler.)

**Olumsuz Cümleler**
Yardımcı fiilden (am-is-are) sonra "not" eki getirilir.
- I am not a student. (Ben bir öğrenci değilim.)
- She is not (isn't) happy. (O mutlu değil.)
- We are not (aren't) ready. (Biz hazır değiliz.)

**Soru Cümleleri**
Bir cümleyi soru haline getirmek için yardımcı fiil cümlenin en başına, öznenin hemen önüne getirilir.
- Am I late? (Geciktim mi?)
- Is he your brother? (O senin erkek kardeşin mi?)
- Are they Turkish? (Onlar Türk mü?)

**Olumsuz Soru Cümleleri**
Hem soru sorup hem de olumsuzluk belirtmek için kullanılır. Merak veya şaşkınlık ifade eder.
- Aren't you tired? (Yorgun değil misin?)
- Isn't she coming? (O gelmiyor mu?)
- Am I not invited? / Aren't I invited? (Davetli değil miyim? — **Not:** "Am I not" daha resmidir, "Aren't I" günlük konuşmada yaygındır.)

**Not:** Eğer cümlede eylem yoksa "am-is-are", "was-were", "been", "be" kullanılır ("-dır", "-dir" anlamı verir).`,
      quiz: [
        { q: 'He ___ a teacher.', options: ['am', 'is', 'are', 'be'], answer: 'is' },
        { q: 'They ___ happy today.', options: ['am', 'is', 'are', 'was'], answer: 'are' },
        { q: '___ you ready?', options: ['Is', 'Am', 'Are', 'Do'], answer: 'Are' },
      ],
    },
    {
      id: 'past_definition_sentences',
      name: '3- Geçmiş Zamanlı Tanım Cümleleri',
      icon: '🕰️',
      explanation: `**3. Geçmiş Zamanlı Tanım Cümleleri (Was - Were)**
Geçmişte bir şeyin ne olduğunu, nerede olduğunu veya nasıl olduğunu anlatmak için kullanırız. Bu cümlede EYLEM (koşmak, yemek, çalışmak gibi) YOKTUR. Sadece durum ve yer bildiririz.

**Özne - Yardımcı Fiil Tablosu**
| **Özne (Subject)** | **Olumlu** | **Olumsuz (Kısaltma)** |
| I (Ben) | was | wasn't |
| You (Sen) | were | weren't |
| He (O) / She (O) / It (O) | was | wasn't |
| We (Biz) | were | weren't |
| You (Siz) | were | weren't |
| They (Onlar) | were | weren't |

**Örnekler:**
- The door was open. (Kapı açıktı.)
- The door wasn't open. (Kapı açık değildi.)
- Was the door open? (Kapı açık mıydı?)

**Not: Cümleden Tamlamaya**
Bir cümlede yardımcı fiili (is/are/was/were) kaldırırsanız, cümle bir "tanımlamaya" dönüşür:

**Örnek 1:**
- The picture is on the desk. (Resim masanın üzerindedir. -> **Cümle**)
- The picture on the desk. (Masanın üzerindeki resim. -> **Tamlama/Özne**)

**Örnek 2:**
- The coffee is on the table. (Kahve masanın üzerindedir. -> **Cümle**)
- The coffee on the table. (Masanın üzerindeki kahve. -> **Tamlama/Özne**)`,
      quiz: [
        { q: 'The door ___ open yesterday.', options: ['is', 'are', 'was', 'were'], answer: 'was' },
        { q: 'They ___ at home last night.', options: ['was', 'were', 'is', 'are'], answer: 'were' },
        { q: '___ she tired after the trip?', options: ['Was', 'Were', 'Is', 'Did'], answer: 'Was' },
      ],
    },
  ],
};
