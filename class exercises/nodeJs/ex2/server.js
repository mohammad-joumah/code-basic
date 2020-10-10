const http = require('http');
const PORT = 5000;
const fs = require('fs');

// create server for browser
// request only start/run when someone call from browser
let myServer = http.createServer((request, response)=> {
    let currentUrl = request.url;
    console.log('The URL Path is: ', currentUrl);
    switch (currentUrl) {
        case '/':
            fs.readFile('html/index.html', (err, data)=> {
               if(err) throw err;
               response.write(data);
               response.end();
            });
            break;
        case '/about':
            console.log('aboutme.html');
            fs.readFile('html/aboutme.html', (err, data)=> {
                if(err) throw err;
                response.write(data);
                response.end();
             });
            break;
        case '/gallery':
            console.log('gallery.html');
            fs.readFile('html/gallery.html', (err, data)=> {
                if(err) throw err;
                response.write(data);
                response.end();
             });
            break;
    
        default:
            fs.readFile('html/404.html', (err, data)=> {
                if(err) throw err;
                response.write(data);
                response.end();
             });
            break;
    }
});
// listen server request
myServer.listen(PORT, ()=> {
    console.log('My Web Server is running on: :' + PORT );
});


