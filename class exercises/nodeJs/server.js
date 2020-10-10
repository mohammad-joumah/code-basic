const http = require('http');
const PORT = 5000;
const host = 'localhost';
const fs = require('fs');


// const hr = http.createServer(function(req, res) {
//     if (req.url === '/') {
//         fs.readFile('bbc.html', function(err, data) {
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.write(data);
//             res.end();

//         });
//     } else if (req.url === '/bbc.css') {
//         fs.readFile('bbc.css', function(err, data) {
//             res.writeHead(200, { "Content-Type": "text/css" });
//             res.write(data);
//             res.end();
//         });
//     }

// }).listen(8080);


let myServer = http.createServer((request, response) => {

    fs.readFile('bbc.html', (err, data) => {
        if (err) throw err;
        response.write(data);
        response.end();
    });
});
myServer.listen(PORT, host, () => {
    console.log('My Web Server is running on: ' + host + ':' + PORT);
});

fs.open('mynewfile2.txt', 'w', function(err, file) {
    if (err) throw err;
    console.log('Saved!');
});
// fs.unlink('mynewfile2.txt', function(err) {
//     if (err) throw err;
//     console.log('File deleted!');
// });