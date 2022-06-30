const data = require("./data.json")
const fs = require("fs")

fs.writeFile('datei.txt', '', err => {
    if (err) {
        console.log(err);
        return;
    }
    data.forEach(elt => fs.appendFileSync('datei.txt', `${elt.id} - ${elt.title} \n${elt.description}\n \n`))
});