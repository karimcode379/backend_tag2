const fs = require("fs")

fs.access('./MyFunnyFolder', fs.F_OK, (err) => {
    if (err) {
        fs.mkdir('MyFunnyFolder', err => {
            if (err) {
                console.log(err);
                return;
            }
        });
        return
    }
    fs.rmdir('./MyFunnyFolder', (err) => {
        if (err) {
            console.log(err);
            return;
        }
    })
})

fs.access('./What/isThis.txt', fs.F_OK, (err) => {
    if (err) {
        fs.mkdir('./What/', err => {
            if (err) {
                console.log(err);
                return;
            }
            fs.writeFile('./What/isThis.txt', '', err => {
                if (err) {
                    console.log(err);
                    return;
                }
            });
        });
        return
    }
})