const fs = require("fs");

// reading a file text
const readText = fs.readFileSync('C:/Users/USER/Desktop/l2b3/mongodb-express-mongoose/learning-node/texts/read.txt', 'utf-8');
// console.log(readText);

// writing a text
const writtenText = fs.writeFileSync("./texts/write.txt", readText + "This is my written text");
console.log(writtenText);