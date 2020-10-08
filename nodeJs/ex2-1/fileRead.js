const fs = require('fs');

function fileRead(html, respons) {
    fs.readFile(html, (err, data) => {
        if (err) throw err;
        respons.write(data);
        respons.end();
    });
}
module.exports.fileRead = fileRead;