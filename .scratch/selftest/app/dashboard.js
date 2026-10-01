// Dashboard figures (SYNTHETIC SELF-TEST)
const data = require('./data.json');
const reviewed = data.cards.filter(c => c.reviewed);
// M-001
const knownWell = reviewed.filter(c => c.ease >= 2.5).length / reviewed.length;
console.log('You know ' + Math.round(knownWell * 100) + '% of your cards');
console.log('Cards due today: ' + data.cards.filter(c => !c.reviewed).length);
