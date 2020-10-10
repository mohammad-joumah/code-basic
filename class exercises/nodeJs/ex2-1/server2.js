const http = require('http');
const PORT = 5000;
const moduletest = require('./moduletest')

let myServer = http.createServer((request, response) => {


    console.log('5*10= ' + moduletest.multiply(5, 10))
    console.log('5-10= ' + moduletest.subtract(5, 10))
    console.log('5/10= ' + moduletest.devide(5, 10))

});
// listen server request
myServer.listen(PORT, () => {
    console.log('My Web Server is running on: :' + PORT);
});