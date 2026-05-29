export const nouns = {
  id: 'imperatives',
  name: '3- Emir Cümleleri (Imperatives)',
  icon: '🗣️',
  color: '#FF3366',
  subtopics: [
    {
      id: 'imperatives_intro',
      name: 'Emir Cümleleri (Imperatives)',
      icon: '📢',
      explanation: `
**Emir Cümleleri (Imperatives)**

Emir cümlelerinin en temel özelliği öznesiz olmalarıdır. Birine bir eylemde bulunmasını emretmek, rica etmek veya bir talimat vermek için özne kullanmadan doğrudan fiil ile başlarız.

---

**📌 Yapısal Kurallar**

**1. Olumlu Emirler:**
Doğrudan fiilin yalın haliyle başlar.
* **Form:** Verb + ...

**2. Olumsuz Emirler:**
Cümlenin en başına "Don't" eklenerek kurulur.
* **Form:** Don't + Verb + ...

---

**📝 Örnekler**

- **Look** at those clouds!
*(Şu bulutlara bak!)*

- **Don't tell** a lie to me!
*(Bana yalan söyleme!)*

- **Don't give up** and work a lot!
*(Vazgeçme ve çok çalış!)*

---

> 💡 **Not:** Emir cümlelerinde **"Please"** kelimesini cümlenin başına veya sonuna eklersen, sert bir emirden kibar bir rica cümlesine dönüşürler:
> * **"Open the door."** *(Emir - Kapıyı aç.)*
> * **"Please, open the door."** veya **"Open the door, please."** *(Rica - Lütfen kapıyı aç.)*
      `,
      quiz: [
        { q: '___ the door, please.', options: ['Opens', 'Open', 'To open', 'Opening'], answer: 'Open' },
        { q: "___ touch that wire, it's dangerous!", options: ['Not', "Doesn't", "Don't", 'No'], answer: "Don't" },
        { q: '___ at me when I am talking to you!', options: ['Look', 'Looking', 'To look', 'Looks'], answer: 'Look' }
      ]
    }
  ]
};
