export const tenses = {
  id: 'tenses',
  name: '10- Tenses (Zamanlar)',
  icon: '⏱️',
  color: '#00FF88',
  subtopics: [
    {
      id: '12_tenses_intro',
      name: '12 Tenses (Zamanların Genel Yapısı)',
      icon: '📋',
      explanation: `İngilizce dilinde genellikle ana tense olarak kabul edilen 12 tense bulunur. Bunlar:

1. Simple Present Tense
2. Present Continuous Tense
3. Present Perfect Tense
4. Present Perfect Continuous Tense
5. Simple Past Tense
6. Past Continuous Tense
7. Past Perfect Tense
8. Past Perfect Continuous Tense
9. Simple Future Tense
10. Future Continuous Tense
11. Future Perfect Tense
12. Future Perfect Continuous Tense

Bu tense'ler, zamanın farklı noktalarını, eylemlerin farklı durumlarını veya ilişkilerini ifade etmek için kullanılır.

**1. Present Tenses (Şimdiki ve Geniş Zamanlar)**

| Tense | Olumlu | Olumsuz | Soru |
| :--- | :--- | :--- | :--- |
| **Simple Present** | I study English. *(İngilizce çalışırım.)* | I don't study English. *(İngilizce çalışmam.)* | Do I study English? *(İngilizce çalışır mıyım?)* |
| **Present Continuous** | I am studying English. *(İngilizce çalışıyorum.)* | I am not studying English. *(İngilizce çalışmıyorum.)* | Am I studying English? *(İngilizce çalışıyor muyum?)* |
| **Present Perfect** | I have studied English. *(İngilizce çalıştım.)* | I haven't studied English. *(İngilizce çalışmadım.)* | Have I studied English? *(İngilizce çalıştım mı?)* |
| **Present Perfect Cont.** | I have been studying English. *(İngilizce çalışmaktayım.)* | I haven't been studying English. *(İngilizce çalışmamaktayım.)* | Have I been studying English? *(İngilizce çalışmakta mıyım?)* |

**2. Past Tenses (Geçmiş Zamanlar)**

| Tense | Olumlu | Olumsuz | Soru |
| :--- | :--- | :--- | :--- |
| **Simple Past** | I studied English. *(İngilizce çalıştım.)* | I didn't study English. *(İngilizce çalışmadım.)* | Did I study English? *(İngilizce çalıştım mı?)* |
| **Past Continuous** | I was studying English. *(İngilizce çalışıyordum.)* | I wasn't studying English. *(İngilizce çalışmıyordum.)* | Was I studying English? *(İngilizce çalışıyor muydum?)* |
| **Past Perfect** | I had studied English. *(İngilizce çalışmıştım.)* | I hadn't studied English. *(İngilizce çalışmamıştım.)* | Had I studied English? *(İngilizce çalışmış mıydım?)* |
| **Past Perfect Cont.** | I had been studying English. *(İngilizce çalışmaktaydım.)* | I hadn't been studying English. *(İngilizce çalışmamaktaydım.)* | Had I been studying English? *(İngilizce çalışmakta mıydım?)* |

**3. Future Tenses (Gelecek Zamanlar)**

| Tense | Olumlu | Olumsuz | Soru |
| :--- | :--- | :--- | :--- |
| **Simple Future (Will)** | I will study English. *(İngilizce çalışacağım.)* | I won't study English. *(İngilizce çalışmayacağım.)* | Will I study English? *(İngilizce çalışacak mıyım?)* |
| **Future Continuous** | I will be studying English. *(İngilizce çalışıyor olacağım.)* | I won't be studying English. *(İngilizce çalışmıyor olacağım.)* | Will I be studying English? *(İngilizce çalışıyor olacak mıyım?)* |
| **Future Perfect** | I will have studied English. *(İngilizce çalışmış olacağım.)* | I won't have studied English. *(İngilizce çalışmamış olacağım.)* | Will I have studied English? *(İngilizce çalışmış olacak mıyım?)* |
| **Future Perfect Cont.** | I will have been studying English. *(İngilizce çalışıyor olmuş olacağım.)* | I won't have been studying English. *(İngilizce çalışıyor olmuş olmayacağım.)* | Will I have been studying English? *(İngilizce çalışıyor olmuş olacak mıyım?)* |`,
      image: require('../../Tenses.jpg'),
      image2: require('../../Tenses2.jpg'),
      quiz: [
        { q: 'İngilizcede toplam kaç ana tense vardır?', options: ['10', '12', '8', '14'], answer: '12' },
      ],
    },
    {
      id: 'present_folder',
      name: 'Present',
      isFolder: true,
      subtopics: [
        {
          id: 'present_simple',
          name: 'Present Simple Tense',
          icon: '⏳',
          explanation: `**Simple Present Tense (Geniş Zaman)**

**Açıklama:** Genel doğruları, alışkanlıkları, rutinleri ve değişmez gerçekleri ifade etmek için kullanılır. İngilizcede bu anlamı vermek için "do" ve "does" yardımcı fiilleri kullanılır.

- **I, You, We, They (Çoğul):** do + V1
- **He, She, It (Tekil):** does + V1

**1. Olumlu Cümle**

İngilizcede düz cümlelerde özneden sonra yardımcı fiil gelir. Yardımcı fiil, ana fiile zaman anlamı kazandırır.
**Gizli Yardımcı Fiil (Kısaltma):** Olumlu düz cümlelerde yardımcı fiil genellikle "atılır" ve fiilin içine gizlenir:
- **Do atılırsa:** Fiil yalın kalır. (I do go = I go)
- **Does atılırsa:** Fiilin sonuna "-s, -es, -ies" takılarından biri gelir. (He does go = He goes)

**Örnekler:**
- My car goes fast. (Benim arabam hızlı gider.)
- My cars go fast. (Benim arabalarım hızlı gider.)
- He drinks tea every morning. (O her sabah çay içer.)
- They study English at night. (Onlar gece İngilizce çalışır.)
- The sun rises in the east. (Güneş doğudan doğar.)
- We drink coffee every afternoon. (Her öğleden sonra kahve içeriz.)
- My father works in a big bank. (Babam büyük bir bankada çalışır.)

**2. Olumsuz Cümle**

Yardımcı fiile "not" eklenerek (don't / doesn't) yapılır.

💡 **Vurgu Notu:** Eğer "do not" veya "does not" şeklinde ayrı yazılırsa, olumsuzluk anlamına vurgu yapılır ("Kesinlikle yapmaz" gibi).
⚠️ **Kritik Kural:** Olumsuz cümlede yardımcı fiil (do/does) göründüğü için, fiil artık "-s" takısı almaz; daima yalın (V1) haldedir.

**Örnekler:**
- My car doesn't go fast. (Arabam hızlı gitmez.)
- My cars don't go fast. (Arabalarım hızlı gitmez.)
- She does not eat meat. (O [kesinlikle] et yemez.)
- We don't live in London. (Biz Londra'da yaşamıyoruz/yaşamayız.)
- I don't like spicy food. (Baharatlı yiyecekleri sevmem.)
- It doesn't rain much in summer. (Yazın çok yağmur yağmaz.)
- They do not watch television. (Onlar [kesinlikle] televizyon izlemezler.)

**3. Soru Cümlesi ve Onay Soruları**

**Soru:** Yardımcı fiil (Do/Does) öznenin başına gelir. Soru kelimesi (What, Why vb.) varsa en başa yazılır.
💡 **Vurgulu Olumsuz Soru:** "Not" kelimesi özneden sonra fiilden önce kullanılırsa vurgu artar (Does he not come?).
✅ **Onay Soruları (Tag Questions):** Cümle olumluysa sonuna olumsuz yardımcı fiil + zamir eklenir.

**Örnekler:**
- Does Hasan come here? (Hasan buraya gelir mi?)
- Do you speak English? (İngilizce konuşur musun?)
- Why do they laugh? (Neden gülüyorlar/gülerler?)
- Linda comes here, doesn't she? (Linda buraya gelir, değil mi?)
- Do you live in this city? (Bu şehirde mi yaşıyorsun?)
- Does your sister play the piano? (Kız kardeşin piyano çalar mı?)
- Where does he go every weekend? (O her hafta sonu nereye gider?)

**Genel Uygulama Örnekleri**

| Durum | Örnek Cümle | Analiz |
| :--- | :--- | :--- |
| Olumlu | She reads books. | "She" olduğu için "read" fiili "-s" aldı. |
| Olumlu | They play football. | "They" olduğu için fiil yalın kaldı. |
| Olumsuz | She does not read. | "Does" geldiği için fiildeki "-s" düştü. |
| Soru | Does she read? | "Does" başa geldi, fiil yalın kaldı. |

**Simple Present Tense: İleri Yapılar**

**1. İki Fiilin Birleşimi (Verb + To + Verb)**

Bir cümlede iki fiil yan yana gelirse, ikinci fiil "-mek, -mak / -mayı, -meyi" anlamı kazanmak için başına "to" alır. Birinci fiil özneye göre çekimlenir (s takısı vb.), ikinci fiil sabit kalır.

- I want to make a cake. (Kek yapmak istiyorum.)
- Linda wants to make a cake. (Linda kek yapmak istiyor.)

**2. "Kim?" Soruları (Who)**

Öznenin kim olduğu sorulduğunda "do/does" kullanılmaz. Cümle, sanki "He/She/It" gibi olumlu bir düz cümleymiş gibi kurulur ve fiil "-s" takısı alır.

- Who wants to come with me? (Benimle gelmek kim ister / kim geliyor?)
- Who knows the answer? (Cevabı kim biliyor?)

**3. Sıklık Zarfları**

Eylemin ne kadar sık yapıldığını belirtirler ve genellikle özneden hemen sonra gelirler.

- **Always:** Her zaman, daima. *(I always study.)*
- **Never:** Asla. (Cümle yapısı olumlu ama anlam olumsuzdur: *I never smoke.*)
- **Ever:** Hiç / Herhangi bir zamanda. (Genelde sorularda: *Do you ever go there?*)

**4. Emir Cümleleri (Imperatives)**

Geniş zamanlı bir cümleden özneyi kaldırırsanız cümle emir kipine dönüşür. Sadece karşıdaki kişiye (You) söylenir. Yardımcı fiil "do" söylenmez, olumsuzda "don't" kullanılır.

- **Olumlu:** Go to school! (Okula git!)
- **Olumsuz:** Don't go to school! (Okula gitme!)
`,
          quiz: []
        },
        {
          id: 'present_continuous',
          name: 'Present Continuous Tense',
          icon: '🔄',
          explanation: `**Present Continuous Tense (Şimdiki Zaman)**

**Açıklama:** Şu anda devam eden eylemleri, geçici durumları veya planlanmış yakın geleceği ifade etmek için kullanılır.

**1. Olumlu Düz Cümleler**

Bu yapıda yardımcı fiil olarak "am / is / are" kullanılır ve fiilin sonuna "-ing" takısı eklenir.

- **Kural:** Özne + am/is/are + Fiil(-ing)
- **Zaman Zarfları:** "Now" gibi zarflar ya cümlenin en sonuna ya da en başına (virgül ile) konur.

**Örnekler:**
- Recep is going to school now. (Recep şimdi okula gidiyor.)
- Now, I am driving my car. (Şimdi arabamı kullanıyorum.)
- I am writing a report for my project. (Projem için bir rapor yazıyorum.)
- The baby is sleeping in the cradle. (Bebek beşikte uyuyor.)
- We are waiting for the bus at the stop. (Durakta otobüs bekliyoruz.)

**Fiillere "-ing" Ekleme Kuralları:**
- **Genel:** Direkt eklenir. *(go = going)*
- **-e ile bitenler:** "e" düşer. *(write = writing)*
- **-ie ile bitenler:** "ie" gider, yerine "y" gelir. *(lie = lying, die = dying)*

**2. Olumsuz Düz Cümleler**

Yardımcı fiile "not" eklenir (isn't, aren't). "I" öznesinde sadece "I'm not" kullanılır.

- Recep isn't going to school. (Recep okula gitmiyor.)
- I'm not studying right now. (Şu an ders çalışmıyorum.)
- It isn't raining outside right now. (Şu anda dışarıda yağmur yağmıyor.)
- They aren't listening to the teacher. (Öğretmeni dinlemiyorlar.)
- I'm not using my computer at the moment. (Şu an bilgisayarımı kullanmıyorum.)

⚠️ **Kritik Not: "'s" Karışıklığı**

İngilizcede "'s" eki üç farklı anlama gelebilir:
- **İyelik Eki:** Devamında nesne varsa sahiplik bildirir. *(Recep's book - Recep'in kitabı)*
- **"is" Kısaltması:** Devamında fiil(-ing), zarf veya "not" geliyorsa yardımcı fiildir. *(Recep's going - Recep gidiyor)*
- **Zamirleşmiş İyelik:** Devamında nesne yoksa "onunki" anlamı katar. *(It's Recep's - O Recep'inki)*

**3. Soru Cümleleri ve Özel Durumlar**

Yardımcı fiil (Am/Is/Are) başa gelir.
💡 **Özel Durum:** Onay sorularında (Tag Questions) "I" öznesi için "am I not" yerine "aren't I" kullanılır.

- I am late, aren't I? (Geç kaldım, değil mi?)
- Are you coming to the party tonight? (Bu gece partiye geliyor musun?)
- Is she crying for some reason? (O bir sebeple ağlıyor mu?)
- What are they doing in the garden? (Bahçede ne yapıyorlar?)

**Zaman Zarfları (Keywords)**

Bu kelimeleri gördüğünüzde aklınıza Şimdiki Zaman gelmelidir:
- **now / right now / at the moment / at present:** Şimdi, şu anda.
- **currently / for the time being:** Şu aralar, geçici olarak.
- **these days / day by day:** Bugünlerde, günden güne.
- **more and more:** Giderek daha fazla.

**Genel Uygulama Örnekleri**

| Durum | Örnek Cümle | Analiz |
| :--- | :--- | :--- |
| Olumlu | She is watching TV. | Şu an eylemi yapıyor. |
| Olumsuz | They are not playing. | Şu an eylem yapılmıyor. |
| Soru | Are you listening? | Eylemin yapılıp yapılmadığı soruluyor. |

**Özet Tablolar**

**Olumlu Cümleler**
| Özne | Yardımcı Fiil (Be) | Fiil + Takı | Nesne / Yer / Zaman |
| :--- | :--- | :--- | :--- |
| I | am | V-ing | ... |
| He / She / It | is | V-ing | ... |
| You / We / They | are | V-ing | ... |

**Olumsuz Cümleler**
| Özne | Yardımcı Fiil + Not | Fiil + Takı | Nesne / Yer / Zaman |
| :--- | :--- | :--- | :--- |
| I | am not ('m not) | V-ing | ... |
| He / She / It | is not (isn't) | V-ing | ... |
| You / We / They | are not (aren't) | V-ing | ... |

**Soru Cümleleri**
| (Soru Kelimesi) | Yardımcı Fiil | Özne | Fiil + Takı | Nesne? |
| :--- | :--- | :--- | :--- | :--- |
| (What/Why) | Am | I | V-ing | ...? |
| (Where/Who) | Is | he / she / it | V-ing | ...? |
| (How/When) | Are | you / we / they | V-ing | ...? |`,
          quiz: []
        },
        {
          id: 'present_perfect',
          name: 'Present Perfect Tense',
          icon: '✅',
          explanation: `**Present Perfect Tense (Etkisi Süren Geçmiş Zaman)**

**Açıklama:** Geçmişte belirsiz bir zamanda gerçekleşmiş, ancak etkisi veya sonucu şu anı etkileyen eylemleri ifade eder. "Ne zaman" yapıldığı değil, "yapılmış olup olmadığı" ve "şu anki durumu" önemlidir.

Present Perfect Tense, geçmişte başlayan ve etkisi şu an devam eden eylemleri veya geçmişteki tecrübelerimizi ifade etmek için kullanılır. Türkçede tam bir karşılığı olmadığı için, bu zamanı bağlama göre bazen 'di'li geçmiş zaman' (yaptım), bazen de 'şimdiki zaman' (yapmaktayım/yapıyorum) ile karşılarız. Mantığını en iyi 'Şu an tamamlanmış olan' veya 'Geçmişin şu andaki yansıması' şeklinde kavrayabiliriz. Kısacası; geçmişte gerçekleşen bir eylemin sonucunu veya tecrübesini şu anda yaşıyor olmak bu zamanın ana karakteridir.

Bu zamanın Türkçede tam bir karşılığı yoktur. Mantığını kavramak için şu meşhur **"Ofis Örneği"**ne bakalım:

- **Senaryo 1:** Dün evden ofise gittiniz ve bugün bir arkadaşınızla kafede oturuyorsunuz. Artık ofiste değilsiniz. Bunu anlatırken Simple Past (Geçmiş Zaman) kullanılır:
  *"I went to the office yesterday."* (Dün ofise gittim. [Gittim, bitti, şu an orada değilim.])

- **Senaryo 2:** Ofise geldiniz, şu an masanızda oturuyorsunuz ve birini arayıp "Ofise geldim, buradayım" diyorsunuz. Eylemin etkisi (orada olma durumunuz) hala sürüyor. İşte burada Present Perfect devreye girer:
  *"I have come to the office."* (Ofise geldim. [Hala ofisteyim.])

**1. Olumlu Cümle Yapısı**

Eylemin yapıldığını ve sonucunun şu an geçerli olduğunu belirtir.

| Özne | Yardımcı Fiil | Fiil (V3 / -ed) | Nesne / Sonuç |
| :--- | :--- | :--- | :--- |
| I / You / We / They | have ('ve) | V3 (Past Participle) | ... |
| He / She / It | has ('s) | V3 (Past Participle) | ... |

**Kritik Ayırt Edici:**
- **Simple Past:** My hand swelled. (Elim şişti, ama geçti bitti.)
- **Present Perfect:** My hand has swollen. (Elim şişti ve şu an hala şiş.)

**Yeni Örnekler:**
- I have lost my keys. (Anahtarlarımı kaybettim; şu an kapıda kaldım.)
- My hand has swollen. (Elim şişti. [Bak, hala şiş ve acıyor.])
- He has lost her phone. (Telefonunu kaybetti. [Şu an telefonu yok, ona ulaşamıyoruz.])
- She has broken her leg. (Bacağını kırdı; şu an alçıda.)
- We have cleaned the house. (Evi temizledik; şu an tertemiz.)

⚠️ **Notlar:**
- Eğer **"'s"** iyelik eki anlamında kullanılmışsa, özneden sonra mutlaka bir nesne gelir. *(Ahmet's book)*
- Eğer **"'s"**, **"has"** yardımcı fiilinin kısaltması olarak kullanılmışsa devamında mutlaka 3. hal (V3) veya "-ed" eki almış bir fiil kullanılır. *(Ahmet's gone)*
- Eğer **"'s"**, **"is"** yardımcı fiilinin kısaltması olarak kullanılmışsa devamında ya "-ing" eki almış bir fiil ya da bir sıfat/isim (tarif ifadesi) gelir. *(Ahmet's going / Ahmet's old)*

**2. Olumsuz Cümle Yapısı**

Eylemin henüz gerçekleşmediğini veya beklendiğini ifade eder.

| Özne | Yardımcı Fiil + Not | Fiil (V3 / -ed) | Nesne / Zaman |
| :--- | :--- | :--- | :--- |
| I / You / We / They | haven't (have not) | V3 | ... |
| He / She / It | hasn't (has not) | V3 | ... |

**Yeni Örnekler:**
- I haven't finished the report yet. (Raporu henüz bitirmedim; beklenti sürüyor.)
- My hand hasn't swollen. (Elim şişmedi. [Arı soktu ama henüz bir şişlik yok, birazdan olabilir.])
- I haven't seen the results yet. (Sonuçları henüz görmedim. [Açıklanmasını bekliyorum.])
- He hasn't called me today. (Beni bugün aramadı; hala bekliyorum.)
- They haven't arrived at the airport. (Havaalanına henüz varmadılar.)

**3. Soru Cümlesi Yapısı**

Eylemin deneyimlenip deneyimlenmediğini veya sonucunu sormak için kullanılır.

| Yardımcı Fiil | Özne | Fiil (V3 / -ed) | Nesne? |
| :--- | :--- | :--- | :--- |
| Have | I / you / we / they | V3 | ...? |
| Has | he / she / it | V3 | ...? |

**Yeni Örnekler:**
- Have you ever been to Japan? (Hiç Japonya'da bulundun mu? - Deneyim sorusu)
- Has the rain stopped? (Yağmur durdu mu? - Şu anki durum sorusu)
- Have they seen the new manager? (Yeni müdürü gördüler mi? - Şu an nerede oldukları sorusu)
- Has Ahmet come? (Ahmet geldi mi? [Şu an burada mı?])

**4. Olumsuz Soru Cümlesi Yapısı**

Bir şeyin hala neden yapılmadığını veya beklentinin boşa çıkıp çıkmadığını sorgular.

| Yardımcı Fiil + Not | Özne | Fiil (V3) | Nesne? |
| :--- | :--- | :--- | :--- |
| Haven't | I / you / we / they | V3 | ...? |
| Hasn't | he / she / it | V3 | ...? |

**Örnekler:**
- Hasn't the bee stung you? (Arı seni sokmadı mı? [Hala mı sokmadı, şaşırtıcı.])
- Haven't you gone to the office? (Ofise gitmedin mi? [Şu an başka bir yerde misin?])
- Hasn't Ahmet come yet? (Ahmet henüz gelmedi mi? [Hala mı yok?])

💡 **Ayırt Edici Notlar (Özet)**

**"'s" Karışıklığı:**
- *He's old.* (He is -> Sıfat gelmiş)
- *He's going.* (He is -> V-ing gelmiş)
- *He's gone.* (He has -> V3 gelmiş)

**Genel Özellikler:**
Türkçemizde kendisini doğrudan karşılayan bir zaman olmayan Present Perfect Tense ağırlıklı olarak şuralarda kullanılır:
1. Henüz olmuş ya da henüz olmamış durumları
2. Şimdiye kadar anlamı yükleyebildiğimiz durumları
3. Yakın zamanda gerçekleşmiş ve geçmiş zaman zarfının olmadığı durumları
4. Geçmişte başlamış ve şu anda da devam eden durumları ifade etmek için kullanılır.

**5. Present Perfect Tense: Yaygın Zarflar**

Bu zamanın ruhunu veren, eylemin ne zaman değil, "ne kadar süredir" veya "şu anki durumu nedir" olduğunu belirten kelimelerdir:

**Zarf Listesi:**

- **just:** az önce, henüz
- **yet:** henüz
- **already:** çoktan
- **recently:** son zamanlarda
- **in recent days/weeks/months/years:** son günlerde/haftalarda/aylarda/yıllarda
- **so far:** şu ana kadar
- **until now:** şimdiye kadar
- **up to now:** şu ana kadar
- **up to present:** günümüze kadar
- **since:** -den beri
- **for:** -dır/-dir süresince
- **for ages:** uzun zamandır
- **in the last/past...:** son ... içinde
- **for the last/past...:** son ... süresince
- **during the last/past...:** son ... boyunca
- **over the last/past...:** son ... boyunca/süresince

**Zarfların Cümle İçindeki Kullanımı**

| Zarf | Kullanım Yeri | Anlamı | Örnek |
| :--- | :--- | :--- | :--- |
| **Just** | Yardımcı fiil + Fiil arası | "Az önce, henüz" | I have just eaten. *(Az önce yedim.)* |
| **Already** | Fiil arası veya Sonda | Çoktan (beklenenden önce) | She has already left. *(O çoktan ayrıldı.)* |
| **Yet** | Sadece Cümle Sonu | Henüz (Olumsuz/Soru) | Have you finished yet? *(Henüz bitirmedin mi?)* |

**Örnekler:**
- I have just finished my homework. (Ödevimi henüz/az önce bitirdim.)
- We have already seen this movie. (Bu filmi çoktan izledik.)
- They haven't called us yet. (Bizi henüz aramadılar.)

⚠️ **Kritik Not:** "Already" cümle sonunda da kullanılabilir *(I have seen it already)*, ancak "Just" sadece yardımcı fiil ile ana fiil arasında kullanılır.

**6. Etkisi Süren Yardımcı Fiiller (Modal Perfects)**

Bu yapılar, geçmişte kalan ama "keşke öyle olsaydı" veya "öyle olurdu" dediğimiz durumlar için kullanılır. **Önemli:** Tüm öznelerle sadece "have" kullanılır.

**1. Should Have + V3 (Olmalıydı / Etmeliydi)**

Geçmişteki bir pişmanlığı veya yapılması gerekip de yapılmayan bir eylemi belirtir.

- I should have studied harder. (Daha sıkı çalışmalıydım. [Ama çalışmadım, etkisi pişmanlık olarak sürüyor.])
- You shouldn't have said that. (Bunu söylememeliydin.)

**2. Would Have + V3 (Olurdu / Ederdi)**

Geçmişte bir koşula bağlı olarak gerçekleşebilecek ama gerçekleşmemiş durumları anlatır.

- I would have helped you. (Sana yardım ederdim. [Ama etmedim/edemedim.])
- Would you have come if I invited you? (Seni davet etseydim gelir miydin?)`,
          quiz: []
        },
        {
          id: 'present_perfect_continuous',
          name: 'Present Perfect Continuous Tense',
          icon: '⏱️',
          explanation: `**Present Perfect Continuous Tense (Geçmişten Gelen Süreklilik)**

**Açıklama:** Geçmişte başlamış, şu anda hala devam eden ve ne kadar süredir yapıldığına (süreç) vurgu yapan zamandır.

**1. Present Perfect Tense'den Farkı Nedir?**

Yardımcı fiilden sonra "been" (be fiilinin 3. hali) gelir.
Ana fiil daima V-ing takısı alır.

- **I have cleaned:** Temizledim (Bitti, sonuç temizlik).
- **I have been cleaning:** Temizliyorum (Hala elimde bez var, süreç devam ediyor).

**2. "For" ve "Since" Kullanımı**

| Edat | Anlamı | Kullanım | Örnek |
| :--- | :--- | :--- | :--- |
| **For** | -dır / -dir | Zaman dilimi / Süreç | For three days (3 gündür) |
| **Since** | -den beri | Başlangıç noktası / Tarih | Since 1992 (1992'den beri) |

⚠️ **Kritik Not:** Eğer "since" veya "for"dan sonra virgülle ayrılan ikinci bir cümle geliyorsa, anlam "olduğu için / -den dolayı" şekline dönüşür.
- *Since Ahmet is here, I am happy.* (Ahmet burada olduğu için mutluyum.)

**3. Cümle Yapıları ve Formüller**

**Olumlu Cümle Tablosu**

| Özne | Kısaltma | Yardımcı Yapı | Fiil + ing |
| :--- | :--- | :--- | :--- |
| I / You / We / They | 've | have been | V-ing |
| He / She / It | 's | has been | V-ing |

- I have been wondering about you. (Seni merak edip duruyordum / Merak etmekteydim.)
- She has been practicing piano all day. (Tüm gün piyano pratiği yapıyor.)
- We have been living in Izmir since 2010. (2010'dan beri İzmir'de yaşıyoruz.)
- I have been working on this data science project since 8 AM. (Sabah saat 8'den beri bu veri bilimi projesi üzerinde çalışıyorum.)
- The cat has been sleeping on the sofa for three hours. (Kedi üç saattir kanepede uyuyor.)

**Olumsuz Cümle Yapısı**

**Formül:** Özne + haven't / hasn't + been + V-ing

- I haven't been feeling well lately. (Son zamanlarda kendimi iyi hissetmiyorum.)
- They haven't been talking to each other for a week. (Bir haftadır birbirleriyle konuşmuyorlar.)
- She hasn't been feeling well for a few days. (Birkaç gündür kendini iyi hissetmiyor.)
- We haven't been using the car lately because of the gas prices. (Son zamanlarda benzin fiyatları nedeniyle arabayı kullanmıyoruz.)
- They haven't been talking to each other since the meeting. (Toplantıdan beri birbirleriyle konuşmuyorlar.)

**Soru Cümlesi Yapısı**

**Formül:** Have / Has + Özne + been + V-ing?

- Have you been crying? (Ağlıyor muydun? / Gözlerin şiş.)
- Has it been raining since morning? (Sabahtan beri yağmur mu yağıyor?)
- You haven't been smoking, have you? (Sigara içmiyorsun, değil mi? - Onay sorusu)
- Have you been waiting here for a long time? (Burada uzun süredir mi bekliyorsun?)
- Has it been raining since you left the house? (Evden çıktığından beri yağmur mu yağıyor?)

**4. Soru Kalıpları: "How Long" ve "Since When"**

Bu zamanın en yaygın soru kalıplarıdır.

| Soru Kalıbı | Anlamı | Beklenen Cevap |
| :--- | :--- | :--- |
| **How long...** | Ne kadar süredir? | Genelde "For" (Süreç) |
| **Since when...** | Ne zamandan beri? | Genelde "Since" (Nokta atışı tarih) |

**Örnekler:**
- How long have you been driving this car?
  **Cevap:** For eight years. (8 yıldır.)
- Since when has he been doing this job?
  **Cevap:** Since the beginning of this year. (Bu yılın başından beri.)

**Özet Tablolar**

**Olumlu Cümle Yapısı**

| Özneler | Yardımcı Fiil (have/has) | Durum Fiili (been) | Ana Fiil (-ing) | Cümlenin Geri Kalanı |
| :--- | :--- | :--- | :--- | :--- |
| I / You / We / They | have | been | studying | for two hours. |
| He / She / It | has | been | waiting | since 10 AM. |

**Kısaltma**

| Tam Yazım | Kısaltılmış Özne | Durum Fiili | Örnek Kullanım (Fiil+ing) |
| :--- | :--- | :--- | :--- |
| I have | I've | been | I've been working. |
| You have | You've | been | You've been sleeping. |
| He has | He's | been | He's been running. |
| She has | She's | been | She's been cooking. |
| It has | It's | been | It's been raining. |
| We have | We've | been | We've been waiting. |
| They have | They've | been | They've been talking. |

**Olumsuz Cümle Yapısı**

| Özneler | Olumsuz Yardımcı Fiil | Durum Fiili | Ana Fiil (-ing) | Cümlenin Geri Kalanı |
| :--- | :--- | :--- | :--- | :--- |
| I / You / We / They | haven't | been | exercising | for a long time. |
| He / She / It | hasn't | been | eating | since yesterday. |

**Soru Cümlesi Yapısı**

| Yardımcı Fiil (+not) | Özneler | Durum Fiili | Ana Fiil (-ing) | Cümlenin Geri Kalanı |
| :--- | :--- | :--- | :--- | :--- |
| Have / Haven't | I / you / we / they | been | working | here lately? |
| Has / Hasn't | he / she / it | been | snowing | all night? |

**Özel Soru Kalıpları (How Long / Since When)**

| Soru Kelimesi | Yardımcı Fiil | Özne | Durum Fiili | Ana Fiil (-ing) | Cümlenin Geri Kalanı |
| :--- | :--- | :--- | :--- | :--- | :--- |
| How long | have | you | been | driving | this car? |
| Since when | has | she | been | doing | this job? |
| How long | have | they | been | living | in Turkey? |`,
          quiz: []
        }
      ]
    },
    {
      id: 'past_folder',
      name: 'Past',
      isFolder: true,
      subtopics: [
        {
          id: 'past_simple',
          name: 'Past Simple Tense',
          icon: '⏪',
          explanation: `**Simple Past Tense (Di'li Geçmiş Zaman)**

**Açıklama:** Geçmişte belirli bir zamanda gerçekleşmiş, tamamlanmış ve bitmiş eylemleri ifade eder. Türkçedeki "-dı, -di, -du, -dü" eklerinin karşılığıdır. İngilizcedeki temel yardımcı fiili "did" kelimesidir.

**1. Olumlu Cümle Yapısı**

Olumlu düz cümlelerde yardımcı fiil (did) genellikle fiilin içine gizlenir.
- **Kural 1 (Düzenli Fiiller):** Fiilin sonuna "-ed" takısı gelir. (call = called)
- **Kural 2 (Düzensiz Fiiller):** Fiil tamamen değişerek 2. halini (V2) alır. (go = went)
- **Kural 3 (Did) Vurgu Durumu:** Eğer "did" yardımcı fiili özneden sonra ayrı yazılırsa (I did call), eyleme "gerçekten yaptım" anlamında bir vurgu kazandırır. Bu durumda fiil daima yalın (V1) kalır.

| Özne | Yardımcı Fiil | Fiil Durumu | Örnek Cümle |
| :--- | :--- | :--- | :--- |
| I / You / He / She / It / We / They | (did) Gizli | Fiil + "-ed" (Düzenli) | Hasan yelled at me. |
| I / You / He / She / It / We / They | (did) Gizli | V2 Formu (Düzensiz) | I went to the office. |
| I / You / He / She / It / We / They | did Açık | V1 (Yalın) (Vurgu) | Hasan did yell at me! |

**Örnekler:**
- We worked hard for the exam. (Sınav için çok sıkı çalıştık.)
- We went to the cinema last Friday. (Geçen Cuma sinemaya gittik.) — [Go = Went]
- The rain stopped an hour ago. (Yağmur bir saat önce durdu.) — [Stop = Stopped]
- I bought a new phone yesterday. (Dün yeni bir telefon satın aldım.) — [Buy = Bought]
- I did finish it! (Onu gerçekten bitirdim!)

**2. Olumsuz Cümle Yapısı**

Yardımcı fiile "not" eklenir (didn't). Yardımcı fiil cümlede görünür hale geldiği için fiil artık ek almaz, yalın (V1) haline döner.

| Özne | Olumsuz Yardımcı Fiil | Fiil (V1) | Nesne / Zaman |
| :--- | :--- | :--- | :--- |
| I / You / He / She... | didn't (did not) | Yalın Hal | They didn't finish. |

**Örnekler:**
- He didn't go to the party yesterday. (Dün partiye gitmedi.)
- It didn't rain last week. (Geçen hafta yağmur yağmadı.)
- She didn't come to the meeting this morning. (Bu sabah toplantıya gelmedi.)
- They didn't see the accident on the road. (Yoldaki kazayı görmediler.)
- I didn't forget your birthday. (Senin doğum gününü unutmadım.)

**3. Soru Cümlesi Yapısı**

Yardımcı fiil (Did) öznenin başına gelir. Fiil yine yalın (V1) haldedir.

| (Soru Kelimesi) | Yardımcı Fiil | Özne | Fiil (V1) | Nesne? |
| :--- | :--- | :--- | :--- | :--- |
| (Why) | Did / Didn't | you | visit | Paris? |

**Örnekler:**
- Did you sleep well last night? (Dün gece iyi uyudun mu?)
- What did they eat for lunch? (Öğle yemeği için ne yediler?)
- Did you finish the report on time? (Raporu zamanında bitirdin mi?)
- What did he say about the project? (Proje hakkında ne söyledi?)
- Did it snow in Ankara last winter? (Geçen kış Ankara'ya kar yağdı mı?)

**Zarf Kullanımı ve Yerleşimi**

- **Sıklık Zarfları (Always, Never, Sometimes, Almost):** Genellikle fiilden hemen önce gelirler.
  - I always walked to school. (Okula hep yürürdüm.)

- **Zaman Zarfları (Yesterday, Last year, 2 days ago):** Cümlenin ya en başında (virgülle) ya da en sonunda kullanılırlar.
  - Yesterday, I stayed at home. Veya I stayed at home yesterday.`,
          quiz: []
        },
        {
          id: 'past_continuous',
          name: 'Past Continuous Tense',
          icon: '🔄',
          explanation: `**Past Continuous Tense (Geçmişte Süreklilik)**

**Açıklama:** Past Continuous Tense, geçmişte belirli bir anda devam etmekte olan eylemleri anlatmak için kullanılır. Genellikle bir eylem sürerken başka bir eylemin onu kesintiye uğrattığı durumları vurgular. Türkçedeki '-ıyordu, -iyordu, -uyordu' yapısının tam karşılığıdır. Yardımcı fiil olarak tekil öznelerde 'was', çoğul öznelerde ise 'were' kullanılır.

**Yardımcı Fiil Kullanımı:**
- **Was:** I, He, She, It *(Tekil özneler)*
- **Were:** You, We, They *(Çoğul özneler)*

**1. Olumlu Cümle Yapısı**

Eylemin geçmişte o anda yapılıyor olduğunu belirtir.

| Özne | Yardımcı Fiil (was/were) | Fiil + ing | Örnek Cümle |
| :--- | :--- | :--- | :--- |
| I / He / She / It | was | V-ing | I was studying. |
| You / We / They | were | V-ing | They were playing. |

**Örnekler:**
- I was driving to work at 8 o'clock yesterday. (Dün saat 8'de işe arabayla gidiyordum.)
- She was making a cake for the party. (Parti için kek yapıyordu.)
- The birds were singing beautifully this morning. (Bu sabah kuşlar harika ötüyordu.)
- I was working on my project at midnight. (Gece yarısı projem üzerinde çalışıyordum.)
- They were waiting for the bus when it started to rain. (Yağmur başladığında otobüs bekliyorlardı.)

**2. Olumsuz Cümle Yapısı**

Eylemin geçmişte o anda yapılmadığını belirtir. (wasn't / weren't)

| Özne | Olumsuz Yard. Fiil | Fiil + ing | Örnek Cümle |
| :--- | :--- | :--- | :--- |
| I / He / She / It | wasn't | V-ing | I wasn't studying. |
| You / We / They | weren't | V-ing | They weren't playing. |

**Örnekler:**
- He wasn't sleeping when I entered the room. (Odaya girdiğimde uyumuyordu.)
- We weren't watching TV at that moment. (O anda televizyon izlemiyorduk.)
- It wasn't snowing last night. (Dün gece kar yağmıyordu.)
- She wasn't listening to the teacher during the lesson. (Ders boyunca öğretmeni dinlemiyordu.)
- We weren't sleeping when the alarm went off. (Alarm çaldığında uyumuyorduk.)

**3. Soru Cümlesi Yapısı**

Yardımcı fiil (Was/Were) öznenin başına gelir.

| Yardımcı Fiil | Özne | Fiil + ing | Örnek Cümle |
| :--- | :--- | :--- | :--- |
| Was | I / he / she / it | V-ing | Was she reading? |
| Were | you / we / they | V-ing | Were they playing? |

**Örnekler:**
- Were you listening to me? (Beni dinliyor muydun?)
- Was he working on the computer? (Bilgisayarda mı çalışıyordu?)
- What were they doing in the garden? (Bahçede ne yapıyorlardı?)
- Was he driving too fast when the accident happened? (Kaza olduğunda çok mu hızlı sürüyordu?)
- Were you thinking about the same thing? (Sen de aynı şeyi mi düşünüyordun?)

💡 **Kritik Not: When vs. While**
Bu iki bağlaç, Past Continuous'un en büyük tamamlayıcısıdır:

- **When (+ Simple Past):** "-dığında" anlamına gelir. Genellikle devam eden eylemi kesen kısa eylem için kullanılır.
  - *I was sleeping when the phone rang.* (Telefon çaldığında uyuyordum.)

- **While (+ Past Continuous):** "-iken" anlamına gelir. Genellikle aynı anda devam eden iki eylem için kullanılır.
  - *I was studying while he was listening to music.* (O müzik dinlerken ben ders çalışıyordum.)`,
          quiz: []
        },
        {
          id: 'past_perfect',
          name: 'Past Perfect Tense',
          icon: '✅',
          explanation: `**Past Perfect Tense (-Mişli Geçmiş Zaman)**

**Açıklama:** Geçmişte gerçekleşmiş iki olaydan, zaman olarak daha önce olanı ifade etmek için kullanılır. "Geçmişin geçmişi"dir. Türkçeye genellikle "-mıştı, -mişti" olarak çevrilir. Yardımcı fiil olarak tüm öznelerle "had" ve fiilin 3. hali (V3) kullanılır.

**1. Olumlu Cümle Yapısı**

| Özne | Yardımcı Fiil | Fiil (V3) | Örnek Cümle |
| :--- | :--- | :--- | :--- |
| I / You / He / She / It / We / They | had | V3 | I had left home. |

**Kısaltma Tablosu:**

| Özne | Tam Yazım | Kısaltılmış Hal | Örnek Cümle (V3 ile) |
| :--- | :--- | :--- | :--- |
| I | I had | I'd | I'd finished the report. |
| You | You had | You'd | You'd already left. |
| He | He had | He'd | He'd seen the movie. |
| She | She had | She'd | She'd eaten lunch. |
| It | It had | It'd | It'd stopped raining. |
| We | We had | We'd | We'd forgotten the keys. |
| They | They had | They'd | They'd arrived early. |

**Yeni Örnekler:**
- The train had already departed when we reached the station. (İstasyona vardığımızda tren çoktan kalkmıştı.)
- I had never seen such a beautiful sunset before I went to Bali. (Bali'ye gitmeden önce hiç bu kadar güzel bir gün batımı görmemiştim.)
- She had already eaten when I got home. (Ben eve geldiğimde o zaten yemişti.)
- They had left before the storm started. (Fırtına başlamadan önce onlar gitmişlerdi.)
- She had studied Spanish before she moved to Madrid. (Madrid'e taşınmadan önce İspanyolca çalışmıştı.)

⚠️ **NOT:** Eğer "had" yardımcı fiilinden sonra bir fiil geliyorsa (3. halinde veya "-ed" ekiyle) cümle Past Perfect Tense kipinde kurulmuş demektir; eğer "had" yardımcı fiilinden sonra gelen kelime bir nesne ismiyse o zaman cümlenin öznesinin geçmişte o şeye sahip olduğunu anlatıyor demektir.

**2. Olumsuz Cümle Yapısı**

| Özne | Olumsuz Yard. Fiil | Fiil (V3) | Örnek Cümle |
| :--- | :--- | :--- | :--- |
| I / You / He / She / It / We / They | hadn't (had not) | V3 | I hadn't gone. |

**Yeni Örnekler:**
- She hadn't studied enough for the exam, so she failed. (Sınav için yeterince çalışmamıştı, bu yüzden kaldı.)
- The movie hadn't started when we arrived at the cinema. (Sinemaya vardığımızda film başlamamıştı.)
- I hadn't realized my mistake until the teacher told me. (Öğretmen söyleyene kadar hatamı fark etmemiştim.)
- She had not eaten when I got home. (Ben eve geldiğimde o yememişti.)
- They hadn’t left before the storm started. (Fırtına başlamadan önce onlar gitmemişlerdi.)

**3. Soru Cümlesi Yapısı**

| Yardımcı Fiil | Özne | Fiil (V3) | Örnek Cümle |
| :--- | :--- | :--- | :--- |
| Had | I / you / he / she... | V3 | Had you seen her? |

**Yeni Örnekler:**
- Had you ever played this game before today? (Bugünden önce bu oyunu hiç oynamış mıydın?)
- Had they finished the meeting before the power cut? (Elektrik kesintisinden önce toplantıyı bitirmişler miydi?)
- Had you finished your homework before your friends arrived? (Arkadaşlarınız gelmeden önce ödevinizi bitirmiş miydiniz?)
- Had she eaten when I got home? (Ben eve geldiğimde o yemiş miydi?)
- Had they ever traveled by plane before their trip to Italy? (İtalya gezilerinden önce hiç uçakla seyahat etmişler miydi?)

*Eğer bilgimizi onaylatmak için bu cümleyi kullanırsak düz cümlenin sonunda yardımcı fiilin ters halini kullanırız.*
- You'd left home early on that day, hadn't you? (O gün evden erken çıkmıştın, değil mi?)

💡 **NOT:** "on what date", "with whose order" gibi başka soru kalıpları da var.

💡 **NOT:** Türkçede başka birinden duyduğumuz durumları anlatırken "öyleymiş, böyleymiş, yapmış, etmiş" gibi cümleler kurarız. Bunlar "had"'in karşılığı olan "-mıştı, -mişti" ekiyle karıştırılmamalıdır.

💡 **Kritik Not: Karıştırma!**

**Mülkiyet vs. Zaman:**
- I had a car. (Bir arabam vardı. -> Sahip olma)
- I had bought a car. (Bir araba almıştım. -> Zaman)

**Türkçedeki "-miş" farkı:**
Başkasına anlatırken kullanılan "Öyleymiş" (Reported Speech) ile eylem sırası olan "-mıştı" (Past Perfect) farklıdır. Bu zaman sadece olayların sırasını belirtir.

**Past Perfect Tense ve Zaman Bağlaçları**

**Temel Kural:** Geçmişte iki olay vardır. Önce olan olay Past Perfect (Had + V3), sonra olan olay ise Simple Past (V2) ile anlatılır.

**1. After (Sonra) & As soon as (-er -mez)**

Bu bağlaçlardan hemen sonra gelen cümle genellikle daha önce yapılan eylemdir. Bu yüzden bu bağlaçların olduğu kısım Past Perfect olur.
- **Kural:** After / As soon as + Past Perfect, Simple Past.
- **Mantık:** Önce ödev bitti (Had V3), sonra dışarı çıkıldı (V2).
- **Örnek:** As soon as I had finished the exam, I left the room. (Sınavı bitirir bitirmez sınıftan çıktım.)

**2. Before (Önce) & When (-dığında)**

Bu bağlaçlar genellikle "ikinci (sonraki)" eylemi bağlar. Bu yüzden bağlacın olduğu kısım Simple Past, diğer taraf Past Perfect olur.
- **Kural:** Before / When + Simple Past, Past Perfect.
- **Mantık:** Ben varmadan (V2) önce, o çoktan gitmişti (Had V3).
- **Örnek:** The film had started before we arrived at the cinema. (Biz sinemaya varmadan önce film başlamıştı.)

**3. Until / Till (-e kadar)**

Bir eylemin, geçmişteki başka bir ana kadar devam ettiğini veya o ana kadar gerçekleşmediğini anlatır.
- **Kural:** Past Perfect + until + Simple Past.
- **Örnek:** I hadn't seen him until he came to my office yesterday. (Dün ofisime gelene kadar onu görmemiştim.)`,
          quiz: []
        },
        {
          id: 'past_perfect_continuous',
          name: 'Past Perfect Continuous Tense',
          icon: '⏱️',
          explanation: `**Past Perfect Continuous Tense (Geçmişte Kalan Süreklilik)**

Past Perfect Continuous Tense, Türkçede "Geçmişte Tamamlanmış Sürekli Zaman" olarak ifade edilebilir. Uzak geçmişte başlayıp belli bir süre devam eden ve sonra yine uzak geçmişte biten ama kendi içinde bir sürekliliği olan olay ve durumları anlatmak için kullanılır.

Bu süreç, geçmişteki belirli bir zamanda başlayıp, başka bir belirli zamanda sona eren bir eylemi veya süreci vurgular. İngilizcede söz konusu durumun çok geçmişte kaldığını anlatmak için "had been" kalıbı kullanılır ve Türkçeye tam anlamıyla tek bir ekle çevrilemez (Genellikle "-yordu" veya "-mekteydi" kullanılır).

- Uzak geçmişte başlayıp belli bir süre devam eden ve sonra yine uzak geçmişte biten olayları anlatır.
- Geçmişte bir süreç ifade eden zamandır.
- "Had been" yardımcı fiili kullanılır.
- Kullanıldığı cümlede başka bir geçmiş zaman yüklemi ya da geçmiş zaman zarfı dışında süreç bildiren kelimelere (for, since vb.) ihtiyaç duyar.

**1. Olumlu Düz Cümle**

**Yapı:** Özne + had been + Fiil(-ing) (+ nesne)

| Özne | Yardımcı Fiil | Fiil (-ing) | Örnek Cümle Tamamı |
| :--- | :--- | :--- | :--- |
| I / You / We / They | had been | working | I had been working all day. |
| He / She / It | had been | waiting | She had been waiting for an hour. |

**Örnekler:**
- I had been walking around here. (Buralarda yürüyordum. [Artık yürümüyorum])
- Joe had been playing football for ten years when he got his first championship. (Joe ilk şampiyonluğunu kazandığında 10 yıldır futbol oynuyordu.)
- They had been talking on the phone for hours when the battery died. (Batarya bittiğinde saatlerdir telefonda konuşuyorlardı.)
- The wind had been blowing for two hours when we stopped at the hotel. (Otelde durduğumuzda 2 saattir rüzgar esiyordu.)
- The baby had been crying since morning before he finally fell asleep. (Bebek nihayet uyuyakalmadan önce sabahtan beri ağlıyordu.)

**Kısaltma Tablosu:**

| Şahıs Zamiri | Olumlu Kısaltma | Olumsuz Kısaltma |
| :--- | :--- | :--- |
| I | I'd been | I hadn't been |
| You | You'd been | You hadn't been |
| He / She / It | He'd / She'd / It'd been | He / She / It hadn't been |
| We / They | We'd / They'd been | We / They hadn't been |

**2. Olumsuz Düz Cümle**

Olumsuz durumu geçmişte belirli bir süre boyunca yapılmayan veya gerçekleşmeyen eylemler için kullanılır.

| Özne | Yardımcı Fiil | Fiil (-ing) | Örnek Cümle Tamamı |
| :--- | :--- | :--- | :--- |
| I / You / We / They | hadn't been | sleeping | They hadn't been sleeping well. |
| He / She / It | hadn't been | trying | He hadn't been trying hard enough. |

**Örnekler:**
- I hadn't been exercising for three years. (Üç yıldır spor yapmıyordum.)
- She hadn't been working for Sabancı when she got married. (Evlendiğinde Sabancı'da çalışmıyordu.)
- It hadn't been raining for long when we went outside. (Dışarı çıktığımızda uzun süredir yağmur yağmıyordu.)
- We hadn't been expecting any visitors that night. (O gece herhangi bir ziyaretçi beklemiyorduk.)
- He hadn't been feeling well for a few days before he went to the doctor. (Doktora gitmeden önce birkaç gündür kendini iyi hissetmiyordu.)

**3. Soru Cümlesi**

Bir şeyin uzak bir geçmişte belli bir süredir devam edip etmediğini öğrenmek amacıyla sorulur.

| Yardımcı Fiil | Özne | Been + Fiil (-ing) | Örnek Cümle Tamamı |
| :--- | :--- | :--- | :--- |
| Had | you | been studying | Had you been studying? |
| Had | she | been cooking | Had she been cooking dinner? |

**Örnekler:**
- Hadn't you been exercising for three years? (3 yıldır spor yapmıyor muydun?)
- Had you been standing at the counter? (Tezgahta mı durmaktaydın?)
- Had they been looking for a new house for a long time? (Uzun zamandır yeni bir ev mi arıyorlardı?)
- Had it been snowing before you left the office? (Siz ofisten ayrılmadan önce kar mı yağıyordu?)
- How long had she been learning English before she moved to New York? (New York'a taşınmadan önce ne kadar süredir İngilizce öğreniyordu?)

*Not: Cümlenin sonuna "değil mi?" sorusunu eklemek için yardımcı fiilin tersini kullanırız (Tag Questions).*
- You hadn't been exercising for three years, had you? (3 yıldır spor yapmıyordun, değil mi?)

💡 **Önemli Notlar**

**Süreç Vurgusu:** Bu tense genellikle *for* (boyunca), *since* (-den beri), *all day* (tüm gün), *before* (-den önce) ve *when* (-dığında) gibi ifadelerle birlikte kullanılır.

**State Verbs (Durum Fiilleri):** "Believe", "know", "love", "like", "want" gibi süreklilik bildirmeyen fiiller genellikle bu tense ile kullanılmaz. Bunun yerine Past Perfect Tense tercih edilir.
- ❌ **Yanlış:** I had been knowing him.
- ✅ **Doğru:** I had known him.

**NOT:** İngilizcede bu yapı, geçmişteki bir olaydan daha önce başlamış ve o ana kadar süregelmiş eylemleri vurgular. Türkçede bu anlamı karşılayan özel bir zaman kipi (ek) bulunmadığı için genellikle "-yordu" veya "-mekteydi" şeklinde çevrilir. Cümleye "süreci" (ne kadar süredir yapıldığını) katan yapı bizzat "had been" kalıbıdır.

**Özetle:** Past Perfect Continuous, geçmişte yaşanan bir olayın "öncesindeki süreci" anlatır. Eğer olay anlıksa veya süreç vurgulanmıyorsa sadece Past Perfect (had + V3) kullanılır.`,
          quiz: []
        }
      ]
    },
    {
      id: 'future_folder',
      name: 'Future',
      isFolder: true,
      subtopics: [
        {
          id: 'future_simple',
          name: 'Future Simple Tense',
          icon: '🔮',
          explanation: `**Future Simple Tense (Gelecek Zaman)**

Future Tense, Türkçede "Gelecek Zaman" olarak ifade edilir. Bu zaman yapısı, gelecekte gerçekleşecek eylemleri veya durumları belirtmek için kullanılır. İngilizcede temel olarak “Will” ve “Be Going to” olmak üzere iki ana kalıpta incelenir.

**1. Will (Gelecek Zaman - Anlık/Tahmin)**

"Will", gelecekteki olayları, tahminleri, teklifleri, ricaları, vaatleri, konuşma anında verilen kararları, kanıt olmayan düşünceleri veya anlık kararları ifade etmek için kullanılır. Türkçedeki "-ecek, -acak" eklerinin karşılığıdır.

**V1 Kullanımı:** Tüm öznelerde fiil hiçbir ek almadan yalın (V1) haliyle kullanılır.

**Anlık Karar:** Planlanmamış, o an karar verilen işlerde "will" tercih edilir.

**Olumlu Düz Cümle**

**Yapı:** Özne + will + Fiil (V1) (+ nesne)

| Özne | Yardımcı Fiil | Fiil (V1) | Örnek Cümle |
| :--- | :--- | :--- | :--- |
| I / You / We / They | will ('ll) | make | I will make a cake today. |
| He / She / It | will ('ll) | fight | Mike Tyson will fight hard. |

**Kısaltma:** Günlük dilde ve gayriresmi yazışmalarda özneden sonra 'll eklenerek kısaltılır (I'll, You'll, It'll).

**Örnekler:**
- I’ll call you later. (Seni daha sonra arayacağım.)
- She will visit her parents next weekend. (Gelecek hafta sonu ailesini ziyaret edecek.)
- They will finish their project by the end of the month. (Ay sonuna kadar projelerini bitirecekler.)
- Wait, I will open the door. (Bekle, kapıyı ben açacağım. - Anlık karar)
- I think it will rain tomorrow. (Bence yarın yağmur yağacak. - Tahmin)

**Olumsuz Düz Cümle**

**Yapı:** Özne + will not (won’t) + Fiil (V1) (+ nesne)

| Özne | Yardımcı Fiil | Fiil (V1) | Örnek Cümle |
| :--- | :--- | :--- | :--- |
| I / You / We / They | won't | drink | My dog won't drink water. |
| He / She / It | won't | finish | He won't finish it on time. |

**Won't:** "Will not"ın kısaltılmışıdır. Eğer "Will not" şeklinde uzun bırakılırsa cümleye bir vurgu veya kararlılık katar.

**"A" vs "Any":** Olumsuz cümlelerde "hiç" anlamı katmak için any kullanılır.
- I won't make a cake: Bir kek yapmayacağım.
- I won't make any cake: Hiç kek yapmayacağım (Kek falan yapmayacağım).

**Örnekler:**
- I will not call you today. (Bugün seni aramayacağım. - Vurgulu)
- She won't visit her parents this month. (Bu ay ailesini ziyaret etmeyecek.)
- They won't attend the meeting. (Toplantıya katılmayacaklar.)
- I won't tell your secret to anyone. (Sırrını kimseye söylemeyeceğim. - Söz verme)
- The car won't start. (Araba çalışmıyor/çalışmayacak.)

**Soru Cümleleri**

**Yapı:** (Soru Kelimesi) + Will / Won't + Özne + Fiil (V1) (+ nesne)?

| Yardımcı Fiil | Özne | Fiil (V1) | Örnek Cümle |
| :--- | :--- | :--- | :--- |
| Will | Ali | call | Will Ali call you? |
| Will | you | come | Will you come tomorrow? |

**Tag Questions (Onay Soruları):** Cümlenin sonuna eklenen "değil mi?" sorularında yardımcı fiilin tersi kullanılır.
- You'll call her, won't you? (Onu arayacaksın, değil mi?)

**Örnekler:**
- Will you come to the party tomorrow? (Yarın partiye gelecek misin?)
- Will she join us for dinner tonight? (Bu akşam yemeğe katılacak mı?)
- What will you do after school? (Okuldan sonra ne yapacaksın?)
- Will they attend the meeting next week? (Gelecek hafta toplantıya katılacaklar mı?)
- Won't you join us? (Bize katılmayacak mısın?)

**Alternatif Kullanım (Teklif ve Rica)**

"Will" sadece gelecek zamanı değil, ricaları ve teklifleri de ifade eder.
- Will you marry me? (Benimle evlenir misin? - Teklif)
- Will you bring me a glass of water? (Bana bir bardak su getirir misin? - Biraz buyurgan/emirvari bir rica)

💡 **Nezaket Notu:** Daha nazik ve kibar bir rica için "Would" tercih edilir: *Would you bring me a glass of water, please?*

**2. Be Going To (Planlı Gelecek Zaman)**

"Going to", gelecekteki planlanmış, kararlaştırılmış veya gerçekleşeceğine dair güçlü kanıt bulunan eylemleri belirtmek için kullanılır. Bu yapı bir niyeti ifade eder ve eylemin gerçekleşme olasılığı çok yüksektir.

**Kesinlik:** "Will" yapısında belirsizlik veya umut varken, "Going to" yapısında kesin bir plan veya "her ne olursa olsun" anlamı vardır.

**Kanıt:** Gökyüzünde kara bulutlar varsa "Yağmur yağacak" derken "It is going to rain" kullanılır (Çünkü kanıt var).

**Yapı:** "am/is/are" yardımcı fiilleriyle kurulur. Fiil daima yalın (V1) haldedir.

**Olumlu Cümleler**

**Yapı:** Özne + am/is/are + going to + Fiil (V1) (+ nesne)

| Özne | Yardımcı Fiil | Kalıp | Fiil (V1) | Örnek Cümle |
| :--- | :--- | :--- | :--- | :--- |
| I | am ('m) | going to | make | I'm going to make a cake today. |
| He / She / It | is ('s) | going to | drink | My dog is going to drink water. |
| We / You / They | are ('re) | going to | buy | They are going to buy a car. |

**Örnekler:**
- I am going to study for the exam tomorrow. (Yarın sınav için çalışacağım.)
- She is going to visit her grandparents next weekend. (Gelecek hafta sonu büyüklerini ziyaret edecek.)
- They are going to buy a new car next year. (Gelecek yıl yeni bir araba alacaklar.)
- Look at those clouds! It is going to rain. (Şu bulutlara bak! Yağmur yağacak. - Kanıt var)
- We are going to move to Izmir next month. (Gelecek ay İzmir'e taşınacağız. - Planlı/Kararlı)

**Olumsuz Cümleler**

Bu yapıdaki olumsuzluk, kararın kesin olduğunu ve eylemin gerçekleşmeyeceğini vurgular.

**Yapı:** Özne + am/is/are + not + going to + Fiil (V1) (+ nesne)

| Özne | Yardımcı Fiil | Kalıp | Fiil (V1) | Örnek Cümle |
| :--- | :--- | :--- | :--- | :--- |
| I | am not | going to | make | I'm not going to make any cake. |
| He / She / It | isn't | going to | drink | My dog isn't going to drink that water. |
| We / You / They | aren't | going to | stay | They aren't going to stay here. |

**Örnekler:**
- I am not going to study for the exam tomorrow. (Yarın sınav için çalışmayacağım. - Son kararım)
- She is not going to visit her parents this month. (Bu ay ailesini ziyaret etmeyecek.)
- They are not going to buy a new car. (Yeni bir araba almayacaklar.)
- I'm not going to tolerate this anymore. (Buna daha fazla müsamaha göstermeyeceğim.)
- We aren't going to join the party tonight. (Bu akşam partiye katılmayacağız.)

**Soru Cümlesi**

**Yapı:** (Soru Kelimesi) + Am/Is/Are + Özne + going to + Fiil (V1)?

| Yard. Fiil | Özne | Kalıp | Fiil (V1) | Örnek Cümle |
| :--- | :--- | :--- | :--- | :--- |
| Am | I | going to | be | Am I going to be successful? |
| Is | she | going to | visit | Is she going to visit you? |
| Are | you | going to | call | Are you going to call her? |

**Tag Question:** You're going to call her, aren't you? (Onu arayacaksın, değil mi?)

💡 **Önemli Not (I Zamiri):** Olumsuz sorularda "Am I not...?" şeklinde kullanılır. Ancak günlük dilde bazen "Aren't I...?" kullanımı da görülür ("Am'nt" diye bir kısaltma yoktur).

**Günlük Dildeki Kullanımı: "Gonna"**

"Going to" yapısı hızlı konuşmada "gonna" şeklinde kısaltılır. Konuşma dilinde veya şarkı sözlerinde kullanılır. Resmi yazışmalarda kullanılmaz, kabalık olarak görülür.

- I'm gonna win. (Kazanacağım.)
- I'm not gonna win. (Kazanmayacağım.)
- Am I gonna win? (Kazanacak mıyım?)

**EK: Past Future Tense (Geçmişte Gelecek Zaman)**

Bu yapı, geçmişteki bir zaman diliminde durup o ana göre "gelecek" olan olaylardan bahsederken kullanılır. Türkçedeki tam karşılığı "-ecekti / -acaktı" ekidir.

**1. Would (Will'in Geçmişi)**

"Will" yardımcı fiilinin geçmiş halidir. Geçmişteki tahminleri, sözleri veya o anki niyetleri ifade eder.

**a) Olumlu Cümle:** Özne + would + Fiil (V1)

- My dog would drink water. (Köpeğim su içecekti.)
- I would make a cake today. (Bugün kek yapacaktım.)

💡 **Kritik Not (Kısaltma Farkı):**
Kısaltmalarda eğer fiil yalın halde kullanılmışsa "d + would" yardımcı fiilinin kısaltması olarak kullanılmış demektir. Eğer fiilin sonunda "-ed" eki varsa veya fiil üçüncü halde kullanılmışsa o zaman "had" yardımcı fiilinin kısaltması olarak kullanılmıştır.

- **'d + V1 (Yalın Fiil):** Bu "would" kısaltmasıdır. (I'd go = I would go)
- **'d + V3 (3. Hal Fiil):** Bu "had" kısaltmasıdır. (I'd gone = I had gone)

**b) Olumsuz Cümle:** Özne + wouldn't (would not) + Fiil (V1)

- My dog wouldn't drink water. (Köpeğim su içmeyecekti.)
- I wouldn't make a cake today. (Bugün kek yapmayacaktım.)

**c) Soru Cümlesi:** (Soru Kelimesi) + Would + Özne + Fiil (V1)?

- Would Gülay call you? (Gülay seni arayacak mıydı?)
- Gülay wouldn't call you, would she? (Gülay seni aramayacaktı, değil mi?)

**d) Alternatif Kullanım (Dilek ve Varsayım):**

"Would" bazen "yapardı, ederdi" anlamı katar. Varsayım cümlelerinde (If Clauses) "I" öznesiyle normalde "was" gelse de, dilek ve hayali durumlarda "were" kullanılır.

- If I were you, I would go. (Yerinde olsam giderdim.)

**2. Was / Were Going To (Planlı Geçmiş Gelecek)**

"Be going to" yapısının geçmiş halidir. Geçmişte yapılması planlanmış, kararlaştırılmış veya gerçekleşeceğine dair kanıt olan eylemleri anlatır.

**Yapı:** Özne + was/were + going to + Fiil (V1)

- She told me she was going to study hard. (O, bana çok çalışacağını söyledi. [Planı buydu])
- I was in a hurry because I was going to meet a friend. (Acelem vardı çünkü bir arkadaşımla buluşacaktım. [Önceden sözleşilmiş])
- I was going to fly to Antalya that day. (O gün Antalya'ya uçacaktım.)

| Özellik | Would | Was / Were Going To |
| :--- | :--- | :--- |
| **Mantık** | Geçmişteki tahmin, umut veya belirsiz niyetler. | Geçmişteki kesin planlar, hazırlıklar veya kanıtlar. |
| **Durum** | Genelde aktarılan bir sözü (He said he would...) belirtir. | Genelde bir planın olduğunu ama belki de gerçekleşmediğini (I was going to... but...) belirtir. |

**Özetle:**

- Eğer geçmişte bir "söz" veya "tahmin" varsa: **Would**
- Eğer geçmişte bir "plan" veya "hazırlık" varsa: **Was/Were Going To**

**Yardımcı Kalıplar: SHALL**

"Shall", modern İngilizcede yerini büyük oranda "Will"e bırakmış olsa da, belirli öznelerle ve durumlarda çok özel anlamlar taşır. Temelde "Öneri" ve "Otorite/Emir" olmak üzere iki ana kulvarda kullanılır.

**1. Öneri ve Teklif (Soru Formu)**

Bu kullanımda "Shall", bir işi yapalım mı yoksa yapmayalım mı diye sormak için kullanılır. En yaygın kullanımı "I" ve "We" zamirleriyledir.

- **Shall I ...? :** Yapayım mı? / Edeyim mi? (Öneri)
  - Shall I open the door? (Kapıyı açayım mı?)

- **Shall we ...? :** Yapalım mı? / Edelim mi? (Öneri)
  - Shall we dance? (Dans edelim mi?)

- **Shall he / they ...? :** (Nadir kullanım) Yapsın mı? / Yapsınlar mı? (Üçüncü şahıs için onay isteme)

**2. Emir, Kararlılık ve Yasal Zorunluluk (Düz Cümle)**

"Shall" yardımcı fiili düz cümlede kullanıldığında, konuşan kişinin otoritesini veya bir durumun kesinliğini belirtir. Bu kullanımda "will"den çok daha güçlü ve "kaçınılmaz" bir anlam vardır.

**A. I ve We ile (Kesin Kararlılık)**

Bu öznelerle kullanıldığında "yapacağım, edeceğim" anlamı verir ama "will"e göre çok daha vurgulu ve söz verme niteliğindedir.
- I shall succeed. (Başaracağım. [Kesin bir söz/karar])
- We shall overcome. (Üstesinden geleceğiz / Yeneceğiz.)

**B. You, He, She, It ve They ile (Emir ve Yasalar)**

Bu öznelerle "Shall" kullanmak, pozisyon olarak üstün olan birinin verdiği emri veya bir yasa maddesini temsil eder. Türkçeye "-eceksin, -acaklar" şeklinde ama "emir" tonuyla çevrilir.
- You shall do as I say. (Dediğimi yapacaksın! [Emir])
- He shall pay for this. (Bunun bedelini ödeyecek! [İntikam/Kararlılık])
- They shall not pass! (Geçemeyecekler! [Geçmesinler anlamında emir])

💡 **Hukuki Not:** Kanunlarda ve sözleşmelerde "The tenant shall pay the rent..." (Kiracı kirayı ödeyecektir) şeklinde kullanılır. Buradaki "shall", eylemin bir zorunluluk olduğunu belirtir.

**Özet Tablo:**

| Özne | Cümle Tipi | Anlamı | Örnek |
| :--- | :--- | :--- | :--- |
| I / We | Soru | Öneri / Teklif | Shall we go? (Gidelim mi?) |
| I / We | Düz | Kesin Karar / Söz | I shall return. (Geri döneceğim.) |
| You / He / They | Düz | Emir / Zorunluluk | You shall obey. (İtaat edeceksin.) |`,
          quiz: []
        },
        {
          id: 'future_continuous',
          name: 'Future Continuous Tense',
          icon: '🔄',
          explanation: `**Future Continuous Tense (Gelecekte Süregelen Zaman)**

Future Continuous Tense, gelecekte belirli bir zamanda devam ediyor olacak eylemleri belirtmek için kullanılır. Bu yapı, eylemin gelecekteki o anki sürekliliğini vurgular.

**Cümle Yapıları**

Fiiller her zaman "-ing" takısı alır ve tüm öznelerde yardımcı fiil sabittir.

| Cümle Tipi | Formül | Örnek |
| :--- | :--- | :--- |
| **Olumlu** | Özne + will be + Fiil(-ing) | I will be studying. |
| **Olumsuz** | Özne + won't be + Fiil(-ing) | She won't be cooking. |
| **Soru** | Will + Özne + be + Fiil(-ing)? | Will they be sleeping? |

**1. Olumlu Düz Cümle**

Gelecekte bir noktada "yapıyor olacağım" anlamı katar.

**Yapı:** Özne + will be + Fiil(-ing) (+ nesne)

- I'll be studying at 8 PM tomorrow. (Yarın saat 8'de ders çalışıyor olacağım.)
- She will be cooking dinner when you arrive. (Sen geldiğinde o akşam yemeği pişiriyor olacak.)
- They will be sleeping when we get home. (Eve geldiğimizde uyuyor olacaklar.)
- This time next week, I will be sunbathing in Antalya. (Gelecek hafta bu zamanlar, Antalya'da güneşleniyor olacağım.)

**2. Olumsuz Düz Cümle**

Gelecekte o an yapılmıyor olacak eylemleri anlatır.

**Yapı:** Özne + will not (won't) be + Fiil(-ing) (+ nesne)

- I will not be studying at 8 PM tomorrow. (Yarın saat 8'de ders çalışmıyor olacağım.)
- She won't be cooking dinner when you arrive. (Sen geldiğinde o akşam yemeği pişirmiyor olacak.)
- They won't be sleeping when we get home. (Eve geldiğimizde uyumuyor olacaklar.)
- Don't call him at 10; he won't be working at that hour. (Onu 10'da arama; o saatte çalışmıyor olacak.)

**3. Soru Cümlesi**

Gelecekteki o anın sürekliliğini sorgulamak için kullanılır.

**Yapı:** Will + Özne + be + Fiil(-ing) (+ nesne)?

- Will you be studying at 8 PM tomorrow? (Yarın saat 8'de ders çalışıyor olacak mısın?)
- Will she be cooking dinner when you arrive? (Sen geldiğinde o akşam yemeği pişiriyor olacak mı?)
- Will they be sleeping when we get home? (Eve geldiğimizde uyuyor olacaklar mı?)
- Will you be using your car tomorrow morning? (Yarın sabah arabanı kullanıyor olacak mısın?)

💡 **Kritik Not: Neden Future Continuous?**

**An Vurgusu:** "Yarın çalışacağım" (I will study) derseniz genel bir gelecekten bahsedersiniz. Ancak "Yarın saat 3'te çalışıyor olacağım" (I will be studying) derseniz, o anki meşguliyetinizi vurgularsınız.

**Nezaket:** Birinden bir şey rica ederken bu tense'i kullanmak daha naziktir.

- Will you go to the market? (Markete gider misin? - Emir gibi)
- Will you be going to the market? (Markete gidecek misin/yolun düşecek mi? - Daha kibar)`,
          quiz: []
        },
        {
          id: 'future_perfect',
          name: 'Future Perfect Tense',
          icon: '✅',
          explanation: `**Future Perfect Tense (Gelecekte Tamamlanmış Zaman)**

Future Perfect Tense, gelecekte belirli bir zaman dilimine ulaşıldığında tamamlanmış, bitirilmiş olacak eylemleri belirtmek için kullanılır. Eylemin sonucuna ve bitiş anına odaklanır, belirli bir gelecek zaman diliminde tamamlanmış olacak eylemleri vurgular.

**Cümle Yapıları**

Bu tense yapısında tüm özneler için "will have" sabit kalır ve fiilin üçüncü hali (V3) kullanılır.

| Cümle Tipi | Formül | Örnek |
| :--- | :--- | :--- |
| **Olumlu** | Özne + will have + Fiil (V3) | I will have finished. |
| **Olumsuz** | Özne + won't have + Fiil (V3) | She won't have graduated. |
| **Soru** | Will + Özne + have + Fiil (V3)? | Will they have arrived? |

**1. Olumlu Düz Cümle**

Gelecekte belirlenen o an geldiğinde eylemin çoktan "yapılmış olduğunu" anlatır.

**Yapı:** Özne + will have + Fiil (V3) (+ nesne)

- I will have finished my work by 5 PM tomorrow. (Yarın saat 5'e kadar işimi bitirmiş olacağım.)
- She will have graduated from university by the end of the year. (Yıl sonuna kadar üniversiteden mezun olmuş olacak.)
- They will have arrived at the airport by the time you get there. (Sen oraya varana kadar onlar havaalanına varmış olacaklar.)
- Next month, we will have been married for ten years. (Gelecek ay, on yıldır evli olmuş olacağız.)

**2. Olumsuz Düz Cümle**

Gelecekteki o ana kadar eylemin henüz bitmemiş olacağını ifade eder.

**Yapı:** Özne + will not (won't) have + Fiil (V3) (+ nesne)

- I will not (won't) have finished my work by 5 PM tomorrow. (Yarın saat 5'e kadar işimi bitirmemiş olacağım.)
- She won't have graduated from university by the end of the year. (Yıl sonuna kadar üniversiteden mezun olmamış olacak.)
- They won't have arrived at the airport by the time you get there. (Sen oraya varana kadar havaalanına varmamış olacaklar.)

**3. Soru Cümlesi**

Gelecekteki belirli bir vakte kadar bir işin tamamlanıp tamamlanmayacağını sormak için kullanılır.

**Yapı:** Will + Özne + have + Fiil (V3) (+ nesne)?

- Will you have finished your work by 5 PM tomorrow? (Yarın saat 5'e kadar işini bitirmiş olacak mısın?)
- Will she have graduated from university by the end of the year? (Yıl sonuna kadar üniversiteden mezun olmuş olacak mı?)
- Will they have arrived at the airport by the time you get there? (Sen oraya varana kadar havaalanına varmış olacaklar mı?)

💡 **Kritik İpucu: Zaman Bağlaçları**

Future Perfect Tense genellikle şu ifadelerle el ele gezer:

- **By...** : -e kadar (By 2030, By next week)
- **By the time...** : -dığı zamana kadar (By the time you read this...)
- **In two years' time** : İki yıl içinde / İki yıl sonraki sürede

**Özet Fark:**

- **Future Continuous:** Yarın bu vakitler çalışıyor olacağım. (Eylem o an sürüyor)
- **Future Perfect:** Yarın bu vakitler çalışmamı bitirmiş olacağım. (Eylem o an bitmiş)`,
          quiz: []
        },
        {
          id: 'future_perfect_continuous',
          name: 'Future Perfect Continuous Tense',
          icon: '⏱️',
          explanation: `**Future Perfect Continuous Tense (Gelecekte Süregelen Tamamlanmış Zaman)**

Bu zaman yapısı, gelecekteki belirli bir zamana kadar devam etmiş olacak eylemleri ve bu eylemlerin ne kadar süredir (süreç) yapılıyor olacağını vurgulamak için kullanılır. Eylemin gelecekteki belirli bir zaman dilimine kadar kesintisiz devam etmiş olacağını vurgular. Türkçeye genellikle "-yor olmuş olacağım" veya "-maktayım/yapmaktayım" şeklinde çevrilir.

Bu tense, bir işin bitip bitmediğinden ziyade, o iş için gelecekteki bir tarihe kadar toplamda ne kadar emek/zaman harcanmış olacağını göstermek için kullanılır.

**Cümle Yapıları**

Bu yapıda tüm özneler için "will have been" sabittir ve fiil daima "-ing" takısı alır.

| Cümle Tipi | Formül | Örnek |
| :--- | :--- | :--- |
| **Olumlu** | Özne + will have been + Fiil(-ing) | I will have been working. |
| **Olumsuz** | Özne + won't have been + Fiil(-ing) | She won't have been studying. |
| **Soru** | Will + Özne + have been + Fiil(-ing)? | Will they have been traveling? |

**1. Olumlu Düz Cümle**

Gelecekteki bir noktaya gelindiğinde, o işin ne kadar süredir yapılıyor olduğunu belirtir.

**Yapı:** Özne + will have been + Fiil(-ing) (+ nesne)

- By this time tomorrow, I will have been working for 8 hours. (Yarın bu saatte, 8 saat boyunca çalışmış/çalışıyor olmuş olacağım.)
- She will have been studying English for two years by the end of next month. (Gelecek ayın sonuna kadar iki yıldır İngilizce çalışıyor olacak.)
- They will have been traveling around the world for six months by the time they return home. (Eve döndüklerinde altı aydır dünya turu yapıyor olacaklar.)

**2. Olumsuz Düz Cümle**

Gelecekteki o noktada, eylemin belirtilen süre kadar devam etmemiş olacağını anlatır.

**Yapı:** Özne + will not (won't) have been + Fiil(-ing) (+ nesne)

- By this time tomorrow, I won't have been working for 8 hours. (Yarın bu saatte 8 saat boyunca çalışıyor olmayacağım.)
- She won't have been studying English for two years by the end of next month. (Gelecek ayın sonuna kadar iki yıldır İngilizce çalışmış olmayacak.)
- They won't have been traveling around the world for six months by the time they return home. (Eve döndüklerinde altı aydır dünya turu yapmış olmayacaklar.)

**3. Soru Cümlesi**

Gelecekteki bir tarihte, bir eylemin ne kadar süredir devam ediyor olacağını sormak için kullanılır.

**Yapı:** Will + Özne + have been + Fiil(-ing) (+ nesne)?

- Will you have been working for 8 hours by this time tomorrow? (Yarın bu saatte 8 saattir çalışıyor olacak mısın?)
- Will she have been studying English for two years by the end of next month? (Gelecek ayın sonuna kadar iki yıldır İngilizce çalışmış olacak mı?)
- Will they have been traveling around the world for six months by the time they return home? (Eve döndüklerinde altı aydır dünya turu yapmış olacaklar mı?)

💡 **Kritik İpucu: Neden "Perfect" ve "Continuous" bir arada?**

- **Continuous:** Eylemin o an "devam ediyor" olması gerektiğini söyler.
- **Perfect:** Gelecekteki o "hedef noktaya" (by the time) ulaşıldığını söyler.

**Özet Fark:**

- **Future Perfect:** "Yarın işi bitirmiş olacağım." (Bitişe odaklanır)
- **Future Perfect Continuous:** "Yarın 5 saattir çalışıyor olmuş olacağım." (Süreye/Çabaya odaklanır)`,
          quiz: []
        }
      ]
    }
  ],
};
