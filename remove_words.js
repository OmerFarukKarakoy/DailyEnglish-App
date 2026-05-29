const fs = require('fs');
const path = require('path');

const vocabFile = path.join(__dirname, 'oxford_dictionary.json');

let vocabData = JSON.parse(fs.readFileSync(vocabFile, 'utf8'));

// Filter out the items that have id >= 4959
const originalLength = vocabData.length;
vocabData = vocabData.filter(v => v.id < 4959);

fs.writeFileSync(vocabFile, JSON.stringify(vocabData, null, 2), 'utf8');

console.log(`Removed ${originalLength - vocabData.length} items from oxford_dictionary.json.`);
