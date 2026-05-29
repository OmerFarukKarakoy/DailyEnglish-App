export const conditionals = {
  id: 'conditionals',
  name: '15- Conditionals (Koşul Cümleleri)',
  icon: '🔀',
  color: '#00D4FF',
  subtopics: [
    {
      id: 'conditional_sentences',
      name: 'Conditional Sentences (Koşul Cümleleri)',
      icon: '📖',
      explanation: `**Conditional Sentences (Koşul Cümleleri)**

Türkçede **"şart cümlecikleri"** olarak bildiğimiz **If Clause yapısı**, cümleye **"eğer"** veya **"-se/-sa"** anlamı katar. Koşul ve sonuç olmak üzere karşılıklı iki cümleden oluştuğu için, bu cümleler belirli zaman kurallarıyla birbirine bağlanır.

** Temel Yapı Grupları**
Bu yapılar, gerçeklik payına ve zaman dilimine göre şu şekilde gruplanır:

**1. Type 1: Real Present (Gerçekleşmesi Mümkün Durumlar)**
• **Kural:** If + Present Tense, Present Tense / Present Modals (Will / Can / May + V1)
• **Mantık:** (1. Hal - 1. Hal) Gelecekte olması muhtemel olaylar.
• **Örnek:** If it rains, I will stay at home.
  (Yağmur yağarsa evde kalacağım.)

**2. Type 2: Unreal Present (Şu Anki Hayali Durumlar)**
• **Kural:** If + Simple Past / Past Modal, Would / Could / Might + V1
• **Mantık:** (2. Hal - 2. Hal) Şu anın zıttı olan hayali durumlar veya düşük ihtimaller.
• **Örnek:** If I were rich, I would travel the world.
  (Zengin olsaydım dünyayı gezerdim.)

**3. Type 3: Unreal Past (Geçmişteki Hayali Durumlar / Pişmanlıklar)**
• **Kural:** If + Past Perfect / Perfect Modal, Would Have V3 / Could Have V3 / Might Have V3
• **Mantık:** (3. Hal - 3. Hal) Geçmişte olup bitmiş olayların zıttını düşünmek.
• **Örnek:** If I had studied harder, I would have passed the exam.
  (Çok çalışsaydım sınavı geçerdim.)

**4. Mixed Type: Past & Present (3. Hal - 2. Hal)**
• **Kural:** If + Past Perfect / Perfect Modal, Would / Could / Might + V1
• **Mantık:**(3. Hal - 2. Hal) Geçmişteki bir olayın/durumun şu anki etkisini belirtmek.
• **Örnek:** If I had taken that map, I wouldn't be lost now.
  (O haritayı alsaydım şimdi kaybolmazdım.)

**5. Mixed Type: Present & Past (2. Hal - 3. Hal)**
• **Kural:** If + Simple Past / Past Modal, Would Have V3 / Could Have V3 / Might Have V3
• **Mantık:** (2. Hal - 3. Hal) Genel bir durumun (kişilik özelliği gibi) geçmişteki bir olaya etkisi.
• **Örnek:** If I weren't so shy, I would have spoken to her yesterday.
  (Utangaç olmasaydım dün onunla konuşurdum.)

** ⚠️ Kritik Hatırlatmalar **
• **Zaman Uyumu:** If'li kısımda (koşul cümlesi) asla **will**, **would** veya **shall** kullanılmaz.
• **Be Fiili:** Type 2 yapısında "be" fiili tüm özneler için (I, you, he, she...) genellikle **"were"** olarak kullanılır.
• **Mixed Type Farkı:** Eğer sonuç cümlesinde **"now, today, at the moment"** gibi ifadeler varsa 4. maddeyi; **"yesterday, last year"** gibi geçmiş zaman ifadeleri varsa 5. maddeyi tercih etmelisin.`,
      quiz: [
        { q: 'If it rains tomorrow, I ___ at home. (Type 1)', options: ['will stay', 'stayed', 'would stay', 'would have stayed'], answer: 'will stay' },
        { q: 'If I ___ you, I wouldn\'t do that. (Type 2)', options: ['am', 'were', 'have been', 'had been'], answer: 'were' },
        { q: 'If I had studied harder, I ___ passed the exam. (Type 3)', options: ['will have', 'would have', 'could', 'might'], answer: 'would have' },
      ],
    },
    {
      id: 'zero_first',
      name: 'Type 1: Real Present (Gerçekleşmesi Mümkün Durumlar)',
      icon: '1️⃣',
      explanation: `**1. Type 1: Real Present (Gerçekleşmesi Mümkün Durumlar)**
If cümlelerinde henüz gerçekleşmemiş ancak şartlar yerine gelirse gerçekleşebilecek durumları anlatmak için kullanılan gruptur. Bu yapıya kısaca (1-1) denmesinin sebebi, her iki tarafın da PRESENT yapıda olmasıdır.

**Kural Düzeni**
• **IF Tarafı:** Present Simple / Present Modals (V1)
• **ANA Cümle:** Present Simple / Will - Can - May - Could - Might - Should - Must (V1)

**Örnek Cümleler**
• If you work hard, you will be a good musician.
(Eğer sıkı çalışırsan, iyi bir müzisyen olacaksın.)

• If we start early, we can complete the work in time.
(Eğer erken başlarsak, işi zamanında bitirebiliriz.)

• Nothing will affect the products adversely, if they are protected well.
(Eğer iyi korunurlarsa, hiçbir şey ürünleri olumsuz etkilemeyecektir.)

• If you take this medicine, you will feel much better soon.
(Eğer bu ilacı içersen, yakında çok daha iyi hissedeceksin.)

• If the weather is sunny tomorrow, we can go for a picnic.
(Eğer yarın hava güneşli olursa, pikniğe gidebiliriz.)

**Not:** Be fiilinin V1 halleri am / is / are yapılarıdır.

💡 **İleri Seviye Not: "Should" Kullanımı (Inversion)**
Type 1 cümlelerinde, If bağlacını cümleden atıp yerine Should getirerek "devrik yapı" oluşturmak mümkündür. Bu kullanım anlamı değiştirmez, sadece cümleyi daha resmi kılar:

• If you work hard, you will be a good musician.
= **Should** you work hard, you will be a good musician.
(Çok çalışırsan iyi bir müzisyen olursun.)

• If you need any help, you can call me anytime.
= **Should** you need any help, you can call me anytime.
(Yardıma ihtiyacın olursa, beni her an arayabilirsin.)`,
      quiz: [
        { q: 'If I study hard, I ___ pass the exam.', options: ['pass', 'will pass', 'would pass', 'passed'], answer: 'will pass' },
        { q: 'If you heat metal, it ___. (genel gerçek)', options: ['will expand', 'expands', 'would expand', 'expanded'], answer: 'expands' },
        { q: 'If she ___ early, she will catch the bus.', options: ['leaves', 'will leave', 'left', 'has left'], answer: 'leaves' },
      ],
    },
    {
      id: 'second_third',
      name: 'Type 2: Unreal Present (Şu Anki Hayali Durumlar)',
      icon: '2️⃣',
      explanation: `**2. Type 2: Unreal Present (Şu Anki Hayali Durumlar)**
If cümlelerinde "şu anda gerçekleşmeyen hayal, varsayım veya düşük ihtimalleri" anlatmak için kullanılan gruptur. Kısaca (2-2) denmesinin sebebi, her iki tarafta da yüklemin PAST formunda olmasıdır.

**Kritik Not:** Bu yapı biçimsel olarak geçmiş zaman olsa da anlam olarak kesinlikle geçmiş değildir; şu ana ait bir varsayımdır.

**Kural Düzeni**
• **IF Tarafı:** Simple Past / Past Continuous / Past Modals (V2)
• **ANA Cümle:** Would / Could / Might + V1

**Örnek Cümleler**
• If you worked hard, you would be a good musician.
(Sıkı çalışıyor olsaydın, iyi bir müzisyen olurdun. [Ama çalışmıyorsun])

• If we started early, we could complete the work in time.
(Erken başlasak, işi zamanında tamamlayabiliriz. [Ama başlamıyoruz])

• Nothing would affect the products adversely, if they were protected well.
(Eğer ürünler iyi korunsalar, hiçbir şey onları olumsuz etkilemezdi. [Ama korunmuyorlar])

• If I had enough money, I would buy a house by the sea.
(Eğer yeterli param olsaydı, deniz kenarında bir ev satın alırdım. [Ama şu an param yok])

• If they knew the truth, they might change their minds.
(Eğer gerçeği bilselerdi, fikirlerini değiştirebilirlerdi. [Ama gerçeği bilmiyorlar])

💡 **İleri Seviye Not: "Were" Kullanımı (Inversion)**
Type 2 cümlelerinde, If bağlacını cümleden atıp yerine Were getirerek devrik yapı oluşturulabilir. Cümlede asıl bir fiil varsa, o fiil "to V1" yapısına dönüşür:

• If you worked hard, you would be a good musician.
= **Were** you **to work** hard, you would be a good musician.
(Not: Eğer cümle "If I were rich" gibi bir yapı olsaydı, devrik hali sadece "Were I rich" olurdu.)

• Were you to win the lottery, what would you do first?
(Piyangoyu kazanacak olsaydın, ilk ne yapardın?)
(Not: Bu cümle "If you won the lottery..." yapısının devrik halidir ve fiil "to win" şekline dönüşmüştür.)`,
      quiz: [
        { q: 'If I ___ rich, I would travel the world.', options: ['am', 'were', 'will be', 'had been'], answer: 'were' },
        { q: 'If you had told me, I ___ helped you.', options: ['would help', 'will help', 'would have helped', 'had helped'], answer: 'would have helped' },
        { q: 'If she ___ harder, she would have passed.', options: ['studied', 'had studied', 'would study', 'has studied'], answer: 'had studied' },
      ],
    },
    {
      id: 'type3_unreal_past',
      name: '3. Type 3: Unreal Past (Geçmişteki Hayali Durumlar / Pişmanlıklar)',
      icon: '3️⃣',
      explanation: `**3. Type 3: Unreal Past (Geçmişteki Hayali Durumlar / Pişmanlıklar)**
If cümlelerinde "tamamen geçmişte kalmış, gerçekleşmiş ve artık değişmesi mümkün olmayan durumları" anlatmak için kullanılan gruptur. Kısaca (3-3) denmesinin sebebi, her iki tarafta da yüklemin PERFECT formunda olmasıdır.

**Kural Düzeni**
• **IF Tarafı:** Past Perfect / Perfect Modals (Had V3)
• **ANA Cümle:** Would Have V3 / Could Have V3 / Might Have V3

**Örnek Cümleler**
• If you had worked hard, you would have been a good musician.
(Sıkı çalışmış olsaydın, iyi bir müzisyen olurdun. [Ama çalışmadın ve olmadın])

• If we had started early, we might have completed the work in time.
(Erken başlasaydık, işi zamanında tamamlayabilirdik. [Ama başlamadık])

• Nothing could have affected the products adversely, if they had been protected well.
(Eğer ürünler iyi korunmuş olsaydı, hiçbir şey onları olumsuz etkileyemezdi.)

• If he had seen the red light, he wouldn't have had an accident.
(Eğer kırmızı ışığı görmüş olsaydı, kaza yapmayacaktı.)

• I could have bought that car if I had saved enough money last year.
(Geçen yıl yeterli para biriktirmiş olsaydım, o arabayı satın alabilirdim.)

💡 **İleri Seviye Not: "Had" Kullanımı (Inversion)**
Type 3 cümlelerinde, If bağlacını cümleden atıp yerine Had yardımcı fiilini başa alarak devrik yapı oluşturulabilir. Bu durumda fiil yine V3 olarak kalır:

• If we had started early, we might have completed the work in time.
= **Had** we started early, we might have completed the work in time.
(Erken başlamış olsaydık, işi zamanında bitirebilirdik.)

• If I had known you were coming, I would have prepared a cake.
= **Had** I known you were coming, I would have prepared a cake.
(Geleceğini bilmiş olsaydım, bir kek hazırlardım.)

⚠️ **Kritik Not**
Hiçbir zaman If bağlacının hemen yanındaki cümlecikte (koşul tarafında) **would** kullanılmaz.`,
      quiz: [
        { q: 'If you had worked hard, you ___ a good musician.', options: ['will be', 'would be', 'would have been', 'had been'], answer: 'would have been' },
        { q: '___ we started early, we might have completed the work in time.', options: ['Should', 'Were', 'Had', 'If'], answer: 'Had' },
        { q: 'I ___ that car if I had saved enough money last year.', options: ['could buy', 'can buy', 'would buy', 'could have bought'], answer: 'could have bought' },
      ],
    },
    {
      id: 'mixed_type_past_present',
      name: '4. Mixed Type: Past & Present (3-2)',
      icon: '4️⃣',
      explanation: `**4. Mixed Type: Past & Present (3-2)**
If tarafı tamamen geçmişte kalmış durumları anlatırken, ana cümlenin şu ana dair bir varsayım veya sonuç ifade ettiği gruptur. Kısaca (3-2) denmesinin sebebi, koşulun geçmişte (Past Perfect), sonucun ise günümüzde (Would/Could/Might + V1) olmasıdır.

**Kural Düzeni**
• **IF Tarafı:** Past Perfect / Perfect Modals (Had V3)
• **ANA Cümle:** Would / Could / Might + V1

**Kritik Not:** Bu yapıda ana cümlede genellikle şu ana işaret eden bir zaman zarfı (now, at the moment, today, nowadays...) bulunur.

**Örnek Cümleler**
• If you had worked hard, you would be a good musician now.
(Eğer geçmişte sıkı çalışmış olsaydın, şu an iyi bir müzisyen olurdun.)

• If we had started early, we might be ready in time at the moment.
(Eğer erken başlasaydık, şu an vaktinde hazır olabilirdik.)

• The products could be in good condition today, if they had been protected well.
(Eğer ürünler iyi korunmuş olsaydı, bugün iyi durumda olabilirlerdi.)

• If I had taken that job last year, I would be living in London now.
(Eğer geçen yıl o işi kabul etmiş olsaydım, şu an Londra'da yaşıyor olurdum.)

• If you hadn't forgotten the map at home, we wouldn't be lost at the moment.
(Eğer haritayı evde unutmamış olsaydın, şu an kaybolmuş olmazdık.)

💡 **İleri Seviye Not: Neden Type 3 Değil?**
Eğer ana cümlede "şu an" vurgusu olmasaydı (örneğin "dün iyi bir müzisyen olurdun" deseydik), bu Type 3 (3-3) olurdu. Ancak Mixed Type'ta geçmişteki bir olay günümüzü etkiler.`,
      quiz: [
        { q: 'If he had saved enough money last year, he ___ a house by the sea now.', options: ['will buy', 'would buy', 'would have bought', 'buys'], answer: 'would buy' },
        { q: 'If you hadn\'t forgotten the map, we ___ lost at the moment.', options: ['won\'t be', 'wouldn\'t have been', 'wouldn\'t be', 'aren\'t'], answer: 'wouldn\'t be' },
        { q: 'We might be ready in time at the moment if we ___ early.', options: ['start', 'started', 'had started', 'have started'], answer: 'had started' },
      ],
    },
    {
      id: 'mixed_type_present_past',
      name: '5. Mixed Type: Present & Past (2-3)',
      icon: '5️⃣',
      explanation: `**5. Mixed Type: Present & Past (2-3)**
If tarafı "şu ana dair genel bir gerçeği veya varsayımı" anlatırken, ana cümlenin geçmişte kalmış bir durumu ifade ettiği gruptur. Kısaca (2-3) denmesinin sebebi, koşulun şu anı (Simple Past), sonucun ise geçmişi (Perfect Modal) kapsamasıdır.

**Kural Düzeni**
• **IF Tarafı:** Simple Past / Past Continuous / Past Modals (V2)
• **ANA Cümle:** Would Have V3 / Could Have V3 / Might Have V3

**Kritik Not:** Bu yapıda ana cümlede genellikle geçmişe işaret eden bir zaman zarfı (yesterday, last night, two years ago...) bulunur.

**Örnek Cümleler**
• If you were a hardworking man, you wouldn't have failed in the exam last week.
(Eğer çalışkan bir adam olsan [bu senin genel özelliğin], geçen haftaki sınavda başarısız olmazdın.)

• If we were richer, we might have bought those cars.
(Eğer daha zengin olsak [genel durumumuz], o arabaları satın almış olabilirdik.)

• The products could have been in good condition if they weren't vegetables.
(Eğer sebze olmasalardı [sebze olmaları değişmez bir gerçek], bu ürünler iyi durumda kalabilirdi.)

• If she spoke English, she could have applied for that job yesterday.
(Eğer İngilizce biliyor olsa, dün o işe başvurabilirdi.)

• If I weren't so afraid of spiders, I would have helped you clean the attic yesterday.
(Eğer örümceklerden bu kadar korkuyor olmasaydım [genel korkum], dün tavan arasını temizlemene yardım ederdim.)

⚠️ **Önemli Notlar**
**Might Hakkında:** "Might" kelimesi hem 1. form (Present ihtimal) hem de 2. form (Past ihtimal) olarak değerlendirilebilir. Mixed Type içinde "Might Have V3" formunda kullanıldığında geçmişteki bir olasılığı anlatır.

**Mantık Farkı:** Bu yapı genellikle karakter özellikleri, yetenekler veya değişmeyen durumlar için kullanılır. (Örn: Korkak olmasam dün o kavgaya girerdim.)`,
      quiz: [
        { q: 'If she ___ English, she could have applied for that job yesterday.', options: ['speaks', 'spoke', 'had spoken', 'is speaking'], answer: 'spoke' },
        { q: 'If you were a hardworking man, you ___ in the exam last week.', options: ['won\'t fail', 'wouldn\'t fail', 'wouldn\'t have failed', 'didn\'t fail'], answer: 'wouldn\'t have failed' },
        { q: 'If we were richer, we ___ those cars.', options: ['might buy', 'might have bought', 'might bought', 'might be buying'], answer: 'might have bought' },
      ],
    },
    {
      id: 'wish_clauses',
      name: 'If Only / I Wish Cümleleri (Keşke)',
      icon: '💭',
      explanation: `**If Only / I Wish Cümleleri (Keşke)**
"Keşke" anlamı veren Wish yapılarında, gerçek olmayan (unreal) durumlar anlatıldığı için dil bilgisi açısından şu dört önemli noktaya dikkat edilmelidir:

**Zaman Kayması:** Wish cümlelerinde yüklem asla Present (V1) formunda olamaz. Anlam şu anı ifade etse bile yapı daima bir derece past (geçmiş) olur.

**Would Kuralı:** İki cümledeki özne aynı olduğunda (I wish I...) **WOULD** yapısı kullanılmaz. Bunun yerine yetenek/olasılık için **COULD** tercih edilir.

**Şu Anki Dilekler:** Konuşma anında olmasını istediğimiz durumlar için Simple Past (V2) veya Modal 2 (Could/Might) kullanılır.

**Geçmişteki Pişmanlıklar:** Geçmişte kalmış ve değişme şansı olmayan dilekler için Past Perfect (Had V3) veya Could Have V3 kullanılır.

**Örnek Cümleler**
• I wish you were here now.
(Keşke şu an burada olsan.)

• If only we had stayed there for a few days more last month.
(Keşke geçen ay orada birkaç gün daha kalsaydık.)

• I wish I could be more patient.
(Keşke daha sabırlı olabilsem.)

• We wish our world were a better place.
(Keşke dünyamız daha güzel bir yer olsa.)

• I wish I knew his phone number.
(Keşke onun telefon numarasını bilsem. [Ama şu an bilmiyorum])

• I wish I could fly a plane.
(Keşke uçak uçurabilsem. [Şu anki bir yetenek dileği])

💡 **Uygulama İçin Küçük Bir Not**
Wish cümlelerinde "be" fiili, Type 2'de olduğu gibi tüm özneler için (I, you, he, she...) genellikle **"were"** olarak kullanılır. (I wish I were...)`,
      quiz: [
        { q: 'I wish you ___ here now.', options: ['are', 'will be', 'were', 'had been'], answer: 'were' },
        { q: 'If only we ___ there for a few days more last month.', options: ['stayed', 'would stay', 'stay', 'had stayed'], answer: 'had stayed' },
        { q: 'I wish I ___ his phone number.', options: ['know', 'knew', 'had known', 'will know'], answer: 'knew' },
      ],
    },
  ],
};
