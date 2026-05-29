export const phrasal_verbs = {
  id: 'phrasal_verbs',
  name: '20- Phrasal Verb (Deyimsel Fiiller)',
  icon: '🧩',
  color: '#10B981',
  subtopics: [
    {
      id: 'phrasal_basic',
      name: 'Phrasal Verbs (Deyimsel Fiiller)',
      icon: '🧩',
      explanation: `
**Phrasal Verbs: Dilin Gizli Kodları**

İngilizcede bazen çok basit kelimelerin yan yana gelip bambaşka anlamlar türettiğini fark ettin mi? İşte buna **Phrasal Verb** denir. Bunlar, İngilizceyi "ders kitabı" seviyesinden çıkarıp, ana dil gibi konuşmanı sağlayan anahtarlardır.

**1. Tanım ve Yapısal Analiz**

Phrasal Verbs, rastgele kelime grupları değildir. Bunlar "LEGO parçaları" gibidir. Bir fiil yanına bir edat (particle) alır ve anlamı tamamen değişir.

Buradaki "sır", yanındaki parçacığın taşıdığı anlamı çözmektir:

**UP (Tamamlanma/Yukarı):** Bir işi bitirmek veya yükselişi anlatır.

- Eat up, Wake up
(Hepsini bitirmek, Tamamen uyanmak)

**OFF (Ayrılma/Kopma):** Bir yerden uzaklaşmayı veya bir bağlantıyı kesmeyi anlatır.

- Take off, Call off
(Havalanmak, İptal etmek)

**OUT (Dışarı/Yok Olma/Ortaya Çıkarma):** Bir şeyin tamamlanıp bitmesini veya gizli olanın açığa çıkmasını anlatır.

- Find out, Run out
(Ortaya çıkarmak, Tükenmek)

**2. Nesne Nereye Girer? (Altın Kurallar)**

Phrasal verb kullanırken nesnenin (object) yeri çok önemlidir. İşte iki basit kural:

**Ayrılabilenler (Separable):** Nesneyi araya alabilirler.

- Turn off the light = Turn the light off
(Her iki kullanım da doğrudur.)

> **💡 Pro Tip:** Eğer nesnen bir zamir ise (it, them, him), mutlaka araya koymalısın: "Turn it off" ✅ / "Turn off it" ❌

**Ayrılamayanlar (Inseparable):** Nesne asla araya giremez.

- Look after the baby
(Bebeğe bak)

> **💡 NOT:** "Look after it" ✅ / "Look it after" ❌

**Genel Bakış Tablosu**

Aşağıdaki tablo, yapısal farkları hızlıca özetlemektedir:

| Özellik | Ayrılabilir (Separable) | Ayrılamaz (Inseparable) |
| --- | --- | --- |
| **Yapı** | Fiil + Edat + Nesne veya Fiil + Nesne + Edat | Fiil + Edat + Nesne |
| **Zamir Durumu** | Zamir araya girmek zorundadır | Zamir sona gelir |
| **Örnek** | Take off your coat | Get on the bus |
`.trim(),
      quiz: [
        { q: 'Eğer nesne "it" gibi bir zamir ise ve phrasal verb "ayrılabilir (separable)" ise, nesne nereye gelmelidir?', options: ['Araya girmek zorundadır', 'Sona gelmek zorundadır', 'Farketmez', 'Başa gelmelidir'], answer: 'Araya girmek zorundadır' },
        { q: 'Aşağıdakilerden hangisi "Ayrılamayanlar (Inseparable)" kuralına uygundur?', options: ['Look after it', 'Look it after', 'Turn it off', 'Turn off it'], answer: 'Look after it' }
      ]
    },
    {
      id: 'dictionary',
      name: 'Phrasal Verb Dictionary (Deyimsel Fiiller Sözlüğü)',
      icon: '📖',
      type: 'dictionary',
      explanation: ``,
      quiz: []
    }
  ]
};
