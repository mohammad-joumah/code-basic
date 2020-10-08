const http = require('http');
const PORT = 5000;
const file = require('./fileRead')
const fetch = require('node-fetch')
const apiLink = 'https://jsonplaceholder.typicode.com/users/1'
const uc = require('upper-case')
    // create server for browser
    // request only start/run when someone call from browser
let myServer = http.createServer((request, response) => {
    fetch(apiLink)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    let data = uc('kdnfkdf');
    console.log(data)
    let currentUrl = request.url;
    console.log('The URL Path is: ', currentUrl);
    switch (currentUrl) {
        case '/':
            file.fileRead('index.html', response)
            break;
        case '/about':
            file.fileRead('aboutme.html', response)
            break;
        case '/gallery':
            file.fileRead('gallery.html', response)
            break;

        default:
            file.fileRead('404.html', response);
            break;
    }
});
// listen server request
myServer.listen(PORT, () => {
    console.log('My Web Server is running on: :' + PORT);
});