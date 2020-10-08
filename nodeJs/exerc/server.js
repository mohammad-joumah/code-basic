const http = require('http');
const PORT = 5000;
const fs = require('fs');
const testModule = require('./testModule');
// create server for browser
// request only start/run when someone call from browser
let myServer = http.createServer((request, response) => {
    // test a module
    console.log(testModule.name('Arif', 'islam'))
    console.log(testModule.add(12, 34));
    console.log(testModule.myCompany);
    console.log(testModule.person);
    let peter = testModule.person;
    let htmlData = '<h1>My Name: ' + peter.name + ' </h1>';
    response.write(htmlData);
    console.log(testModule.friends);
    let currentUrl = request.url; // /profile
    console.log('The URL Path is: ', currentUrl);
    switch (currentUrl) {
        case '/': //localhost:5000/
            fs.readFile('html/index.html', (err, data) => {
                if (err) throw err;
                response.write(data);
                response.end();
            });
            break;
        case '/about': //localhost:5000/about
            console.log('aboutme.html');
            fs.readFile('html/aboutme.html', (err, data) => {
                if (err) throw err;
                response.write(data);
                response.end();
            });
            break;
        case '/gallery':
            console.log('gallery.html');
            fs.readFile('html/gallery.html', (err, data) => {
                if (err) throw err;
                response.write(data);
                response.end();
            });
            break;
        default:
            fs.readFile('html/404.html', (err, data) => {
                if (err) throw err;
                response.write(data);
                response.end();
            });
            break;
    }
});
// listen server request
myServer.listen(PORT, () => {
    console.log('My Web Server is running on: :' + PORT);
});