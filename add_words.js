const fs = require('fs');
const path = require('path');

const vocabFile = path.join(__dirname, 'oxford_dictionary.json');
const phrasalFile = path.join(__dirname, 'phrasal_verbs.json');

const vocabData = JSON.parse(fs.readFileSync(vocabFile, 'utf8'));
const phrasalData = JSON.parse(fs.readFileSync(phrasalFile, 'utf8'));

let maxVocabId = Math.max(...vocabData.map(v => v.id || 0), 0);
let maxPhrasalId = Math.max(...phrasalData.map(v => v.id || 0), 0);

const wordsToAdd = [
  { word: "abrupt", translation: "ani, birdenbire", type: "vocab" },
  { word: "abundant", translation: "bol, bereketli", type: "vocab" },
  { word: "acknowledgments", translation: "teşekkür, onay", type: "vocab" },
  { word: "adversely", translation: "olumsuz yönde", type: "vocab" },
  { word: "afflict", translation: "acı vermek, dert açmak", type: "vocab" },
  { word: "alleviate", translation: "hafifletmek, dindirmek", type: "vocab" },
  { word: "arbitrarily", translation: "rastgele, keyfi olarak", type: "vocab" },
  { word: "cautiously", translation: "dikkatlice", type: "vocab" },
  { word: "considered", translation: "düşünülen, dikkate alınan", type: "vocab" },
  { word: "consistently", translation: "tutarlı bir şekilde", type: "vocab" },
  { word: "contamination", translation: "kirlenme, bulaşma", type: "vocab" },
  { word: "craziness", translation: "delilik", type: "vocab" },
  { word: "densely", translation: "yoğun bir şekilde", type: "vocab" },
  { word: "detrimental", translation: "zararlı", type: "vocab" },
  { word: "diligently", translation: "özenle, gayretle", type: "vocab" },
  { word: "disperse", translation: "dağılmak, dağıtmak", type: "vocab" },
  { word: "emerge", translation: "ortaya çıkmak", type: "vocab" },
  { word: "emit", translation: "yaymak", type: "vocab" },
  { word: "evaporate", translation: "buharlaşmak", type: "vocab" },
  { word: "extinction", translation: "neslinin tükenmesi", type: "vocab" },
  { word: "futile", translation: "boşuna, beyhude", type: "vocab" },
  { word: "gunpowder", translation: "barut", type: "vocab" },
  { word: "indirectly", translation: "dolaylı olarak", type: "vocab" },
  { word: "irrigation", translation: "sulama", type: "vocab" },
  { word: "jeopardise", translation: "tehlikeye atmak", type: "vocab" },
  { word: "keep off", translation: "uzak durmak", type: "phrasal" },
  { word: "keep up", translation: "ayak uydurmak, devam ettirmek", type: "phrasal" },
  { word: "limiting", translation: "sınırlayıcı", type: "vocab" },
  { word: "monitored", translation: "izlenen", type: "vocab" },
  { word: "nourishing", translation: "besleyici", type: "vocab" },
  { word: "nurture", translation: "büyütmek, beslemek", type: "vocab" },
  { word: "precaution", translation: "önlem", type: "vocab" },
  { word: "precipitation", translation: "yağış, çökelti", type: "vocab" },
  { word: "prevalent", translation: "yaygın", type: "vocab" },
  { word: "prominently", translation: "göze çarpan bir şekilde", type: "vocab" },
  { word: "regrettably", translation: "ne yazık ki", type: "vocab" },
  { word: "repeatedly", translation: "defalarca", type: "vocab" },
  { word: "respiration", translation: "solunum", type: "vocab" },
  { word: "rest on", translation: "dayanmak", type: "phrasal" },
  { word: "rivalry", translation: "rekabet", type: "vocab" },
  { word: "run out", translation: "tükenmek", type: "phrasal" },
  { word: "scale down", translation: "küçültmek", type: "phrasal" },
  { word: "scent", translation: "koku", type: "vocab" },
  { word: "sell out", translation: "yok satmak, tükenmek", type: "phrasal" },
  { word: "set back", translation: "geciktirmek", type: "phrasal" },
  { word: "spring up", translation: "türemek, aniden ortaya çıkmak", type: "phrasal" },
  { word: "surprisingly", translation: "şaşırtıcı bir şekilde", type: "vocab" },
  { word: "trivial", translation: "önemsiz", type: "vocab" },
  { word: "devoted", translation: "adanmış, sadık", type: "vocab" },
  { word: "exponentially", translation: "katlanarak", type: "vocab" },
  { word: "linguistics", translation: "dil bilimi", type: "vocab" },
  { word: "recline", translation: "yaslanmak", type: "vocab" },
  { word: "enlighten", translation: "aydınlatmak", type: "vocab" },
  { word: "refresher", translation: "tazeleyici, hatırlatıcı", type: "vocab" }
];

let vocabAdded = 0;
let phrasalAdded = 0;

for (const item of wordsToAdd) {
  if (item.type === "vocab") {
    if (!vocabData.find(v => v.word === item.word)) {
      maxVocabId++;
      vocabData.push({
        id: maxVocabId,
        word: item.word,
        translation: item.translation,
        level: "B2",
        example_sentence: "",
        pronunciation: ""
      });
      vocabAdded++;
    }
  } else if (item.type === "phrasal") {
    if (!phrasalData.find(p => p.word === item.word)) {
      maxPhrasalId++;
      phrasalData.push({
        id: maxPhrasalId,
        word: item.word,
        translation: item.translation,
        level: "B2",
        example_sentence: "",
        pronunciation: ""
      });
      phrasalAdded++;
    }
  }
}

fs.writeFileSync(vocabFile, JSON.stringify(vocabData, null, 2), 'utf8');
fs.writeFileSync(phrasalFile, JSON.stringify(phrasalData, null, 2), 'utf8');

console.log(`Added ${vocabAdded} vocabulary words and ${phrasalAdded} phrasal verbs.`);
