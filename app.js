const sharp = require('sharp')
const fs = require('fs')
const path = require('path')
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("enter the folder absolute path : ", function(f) {
    rl.question("enter the name of the ditination folder : ", function(t) {

        rl.question("advanced [y/n] ? ", function(h) {
            if (h == "y") {

                rl.question("Height of output images: ", function(h) {

                    rl.question("Height of output images: ", function(w) {

                        rl.question("Weight of output images: ", function(q) {

                            rl.question("add \'comp.\' to the output image name [1/0] : ", function(y) {

                                h = Number(h)
                                q = Number(q)
                                w = Number(w)
                                y = Number(y)
                                compress1(f, t, h, w, q, y)

                                rl.close();

                            });

                        });
                    });
                });
            } else {
                compress1(f, t)
                rl.close();
            }


        });
    });
});

rl.on("close", function() {
    console.log(`\n see you next time !!! \n our solial media accounts if you need anything : 
    \n   instagram: 'https://www.instagram.com/hakimdev998/'
    \n   facebook:  'https://www.facebook.com/hakim.dev.794/'
    \n   github:    'https://github.com/mohammed-hakim' `);
});
const compress1 = async(from, to, h = 200, w = 350, q = 75, y = 1) => {
    let dire = from
    let dire2 = path.join(__dirname,'outputs', to)
    fs.readdir(dire, async(err, files) => {
        if (!err) {
            fs.mkdir(dire2, async(err, ok) => {
                console.log(err);
                if (!err || err.code == 'EEXIST') {
                    console.log(55);
                    try {
                        await files.forEach(async x => {
                            let nn = x
                            if (y) { nn = x.replace(".", "comp.") }

                            let d2 = path.join(dire2, nn)
                            let d1 = path.join(dire, x)
                            console.log(d1, d2);
                            await sharp(d1)
                                .jpeg({ quality: q })
                                .resize(w, h)
                                .toFile(d2)
                        });
                    } catch (er) {
                        throw new Error(er)
                    }

                } else {
                    console.log(err)
                }
            })

        } else {
            console.log(err);
        }
    })


}