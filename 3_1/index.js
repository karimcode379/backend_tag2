const fs = require("fs")

const pfad = './file/datei.txt';
const inhalt = 'Gib Bradlfettnbrot'

const erstellen = (pfad, inhalt) => {
    fs.access(pfad, fs.F_OK, (err) => {
        if (err) {
            fs.writeFile(pfad, inhalt, err => {
                if (err) {
                    console.log(err);
                    return;
                }
            });
            return
        }
        fs.appendFile(pfad, `\n` + inhalt, err => {
            if (err) {
                console.log(err);
                return;
            }
        })
    })
}

erstellen(pfad, inhalt)