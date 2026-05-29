const fs = require('fs');
const path = require('path');

const map = {
  "intro_definitions_articles.js": "1",
  "pronouns.js": "2",
  "nouns.js": "3",
  "question_words.js": "4",
  "subject_verb_agreement.js": "5",
  "possession.js": "6",
  "adjectives_adverbs.js": "7",
  "comparative_superlative.js": "8",
  "quantifiers.js": "9",
  "tenses.js": "10",
  "modals.js": "11",
  "conjunctions.js": "12",
  "prepositions.js": "13",
  "passive.js": "14",
  "conditionals.js": "15",
  "gerund_infinitive.js": "16",
  "noun_clause.js": "17",
  "relative_clause.js": "18",
  "reduction.js": "19",
  "phrasal_verbs.js": "20"
};

const dir = path.join(__dirname, 'src', 'data', 'grammar');

for (const [filename, num] of Object.entries(map)) {
  const filepath = path.join(dir, filename);
  if (fs.existsSync(filepath)) {
    let content = fs.readFileSync(filepath, 'utf8');
    // Sadece ana objenin ismindeki sayıyı değiştirmek istiyoruz.
    // İlk 'name:' alanını bulup sayısını değiştirelim
    content = content.replace(/name:\s*['"]\d+-([^'"]*)['"]/, `name: '${num}-$1'`);
    fs.writeFileSync(filepath, content);
    console.log(`Updated ${filename} -> ${num}`);
  }
}
