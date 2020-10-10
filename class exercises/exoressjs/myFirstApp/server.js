// const http = require('http');
// const PORT = 5000;

// let myServer = http.createServer((request, response) => {
//     // test a module

// });
// // listen server request
// myServer.listen(PORT, () => {
//     console.log('My Web Server is running on: :' + PORT);
// });

const express = require('express');
const app = express();

const customers = require('./routes/customers');

app.set('view engine', 'hbs');
app.use('/', customers);
app.use('/gallery', customers);



// app.use('/customers', customers);
// app.get('/', (req, res) => {
//     // res.send('Hallo')
//     res.render('index')
// })
// app.get('/test', (req, res) => {
//     res.send('<h1> that is a test massage</h1>')
// })
// app.use(express.static(__dirname + '/public'));


// function permissionCheck(req, res, next) {
//     console.log(req.url);
//     if (req.url == '/test/admin') {
//         next(); // callback: return something back
//     } else {
//         res.send('You dont have permission to use my page!')
//     }
// }

// function sendMsg(req, res, next) {
//     console.log('I am second middleware')
//     next()
// }


// // routes
// app.get('/test/admin', permissionCheck, sendMsg, (req, res) => {
//     res.send('<h1>You have permission to use this site</h1>');
// });
// app.get('/test/user', permissionCheck, (req, res) => {
//     res.send('I am a user');
// })

// my examle
let userReq = false;
let adminReq = true;

function isLoggedIn(req, res, next) {
    if (userReq && req.url == '/test/user') {
        next();
    } else if (adminReq && req.url == '/test/admin') {
        next();
    } else {

        res.send(401, "Unauthorized");
    }
};

app.get('/test/admin', isLoggedIn, (req, res) => {
    res.send('<h1>You have permission to use this site</h1>');
});
app.get('/test/user', isLoggedIn, (req, res) => {
    res.send('I am a user');
})



// app.get('/', (req, res) => {

//     res.sendFile(__dirname + '/ex05/index.html');
// })
// app.get('/signup', (req, res) => {

//     res.sendFile(__dirname + '/ex05/signup.html');
// })
// app.get('/customer', (req, res) => {

//         res.sendFile(__dirname + '/ex05/customer.html');
// })
// app.get('/gallery', (req, res) => {
//     // __dirname: this means root directory 
//     res.sendFile(__dirname + '/html/gallery.html');
// })
// app.get('/about', (req, res) => {
//     // __dirname: this means root directory 
//     res.sendFile(__dirname + '/html/aboutme.html');
// })
app.listen(5000, () => {
    console.log('My Web Server is running on: 5000')
})