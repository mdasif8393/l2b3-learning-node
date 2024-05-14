const fs = require('fs');

fs.readFile("./texts/read.txt", "utf-8", (err, data) => {
    if (err) {
        throw Error("Error reading text");
    };
    console.log(data);
    // writing text async way. 
    fs.writeFile("./texts/read2.txt", data, "utf-8", function (err) {
        if (err) throw err;
        console.log('Saved!');
    })
})