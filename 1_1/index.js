const fs = require("fs")

fs.readFile('blog1.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});


fs.writeFile('blog1.txt', 'kek', err => {
    if (err) {
        console.log(err);
        return;
    }
});

fs.writeFile('blog2.txt', 'kek2', err => {
    if (err) {
        console.log(err);
        return;
    }
});

fs.mkdir('assets', (err) => {
    if (err) {
        console.log(err);
        return;
    }
})

fs.rmdir('assets', (err) => {
    if (err) {
        console.log('File nicht vorhanden', err);
        return;
    }
})

fs.writeFile('delete.txt', 'kek', err => {
    if (err) {
        console.log(err);
        return;
    }
});


fs.unlink("delete.txt", err => {
    if (err) {
        console.log('Datei nicht vorhanden', err)
        return;
    };
    console.log("\nDeleted file: delete.txt");
});

fs.writeFile('Hello.txt', 'HelloWorld.txt', err => {
    if (err) {
        console.log(err);
        return;
    }
    fs.rename('Hello.txt', 'HelloWorld.txt', err => {
        if (err) {
            console.log(err);
            return;
        }
    })
});