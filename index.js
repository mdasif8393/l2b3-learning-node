const { a, add } = require('./local-1');
const { a: a2, add: add2 } = require('./local-2');

console.log(a);
console.log(add2(2, 3, 3));

// built in module
const path = require('path');

// console.log(path.dirname("C: /Users/USER/Desktop/l2b3/mongodb - express - mongoose/learning - node/index.js"));
// console.log(path.parse("C: /Users/USER/Desktop/l2b3/mongodb - express - mongoose/learning - node/index.js"));
console.log(path.join("C: /Users/USER/Desktop/l2b3/mongodb - express - mongoose/learning - node/index.js", "local-1.js"));