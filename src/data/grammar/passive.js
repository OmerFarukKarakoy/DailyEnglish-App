export const passive = {
  id: 'passive',
  name: '14- Passive Voice (Edilgen Yapı)',
  icon: '🔄',
  color: '#FF3CAC',
  subtopics: [
    {
      id: 'passive_basic',
      name: 'Passive Voice (Edilgen Yapı)',
      icon: '📝',
      explanation: `**Passive Voice (Edilgen Yapı)**

Türkçede edilgen yapı olarak bildiğimiz bu yapı, işi yapanın (özne) değil, **yapılan işin** veya **işten etkilenen varlığın (nesne)** vurgulandığı cümlelerdir.

**Temel Kurallar**

• **Nesne Özne Olur:** Aktif cümlenin nesnesi, pasif cümlenin başına gelir.
• **Be + V3:** Her pasif cümlede mutlaka zamanın gerektirdiği bir "Be" fiili ve fiilin 3. hali (V3) bulunur.
• **Zaman Değişmez:** Cümleyi pasif yapmak zamanı (tense) değiştirmez; sadece yapıyı değiştirir.
• **Aracı (By):** İşi yapan kişiyi belirtmek isterseniz cümlenin sonuna "by" ile ekleyebilirsiniz.

**Dönüşüm Örnekleri ve Açıklamaları**

**Örnek 1:**
• **Active:** The police arrested the thieves last night. 
(Polis dün gece hırsızları tutukladı.)

**Açıklaması:** Bu cümlede öncelikle "the thieves" nesnesi özne olarak başa alınmalıdır. Cümlede "arrested" eylemi V2 (Past) formunda olduğu için bu cümleyi edilgen yaparken Be'nin V2 formu olan "was-were" kullanılmalıdır. Sonrasında ise formül gereği fiilin 3. hali (V3) gerektiği için "arrested" yazılacak ve karşımıza edilgen yapı olarak "were arrested" çıkacaktır. Özneyi ise "by" kullanarak sona almak mümkündür.

• **Passive:** The thieves were arrested last night (by the police). 
(Hırsızlar dün gece tutuklandı.)

**Örnek 2:**
• **Active:** We have rejected all the offers. 
(Tüm teklifleri reddettik.)

**Açıklaması:** Nesne olan "all the offers" başa alınır. Cümle Present Perfect (have V3) olduğu için bu yapı korunur. Perfect yapılarda Be fiili her zaman "been" formuna dönüşür. Böylece yüklem "have been V3" halini alır.

• **Passive:** All the offers have been rejected (by us). 
(Tüm teklifler reddedildi.)

**Adım Adım Dönüşüm Örnekleri**

**Örnek 1:**
• **Active:** Acid rains affect the forests adversely. 
(Asit yağmurları ormanları olumsuz etkiliyor.)
• **Analiz:** "The forests" nesnesini başa al. Eylem V1 (Present) olduğu için "Be"nin present hali olan am/is/are kullan.
• **Passive:** The forests are affected adversely by acid rains. 
(Ormanlar asit yağmurları tarafından olumsuz etkilenir.)

**Örnek 2:**
• **Active:** The doctors can diagnose the illness. 
(Doktorlar hastalığı teşhis edebilirler.)
• **Analiz:** "The illness" nesnesini başa al. Modal (can) aynen kalır. Modal sonrası fiil yalın geldiği için "Be"yi yalın kullan.
• **Passive:** The illness can be diagnosed by the doctors. 
(Hastalık doktorlar tarafından teşhis edilebilir.)

**Diğer Örnekler**

| Active (Etken) | Passive (Edilgen) |
| :--- | :--- |
| The company will launch the product next month. | The product will be launched by the company next month. |
| Leonardo da Vinci painted the Mona Lisa. | The Mona Lisa was painted by Leonardo da Vinci. |
| People speak English all over the world. | English is spoken all over the world. |

⚠️ **Önemli Notlar**

• **Kritik Kural:** Cümlede **"be"** (am, is, are, was, were, been, being) + **"V3"** kombinasyonu varsa o cümle kesinlikle Passive bir cümledir.
• **Zaman Korunur:** Bir cümleyi passive yapmak zamanı değiştirmez; sadece odak noktasını işi yapandan yapılan işe kaydırır.
• **Edat Kullanımı:** Passive cümlelerde nesne başa alındığı için yüklem sonrası preposition (by, for, at, during, in, from...) kullanımı oldukça yaygındır.
• **Geçişsiz Fiiller:** Nesnesi olmayan fiiller (Örn: go, sleep, arrive) pasif yapılamazlar. Çünkü başa alacak bir nesne yoktur.`,
      quiz: [
        { q: 'The book ___ (write) by Tolkien.', options: ['is writing', 'was written', 'wrote', 'has written'], answer: 'was written' },
        { q: 'English ___ in many countries.', options: ['is spoken', 'speaks', 'was speaking', 'spoken'], answer: 'is spoken' },
        { q: 'The project ___ by next week.', options: ['will complete', 'will be completed', 'is completing', 'completes'], answer: 'will be completed' },
      ],
    },
  ],
};
