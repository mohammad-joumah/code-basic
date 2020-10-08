const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});
router.get('/gallery', (req, res) => {
    res.render('gallery');
});
router.get('/about', (req, res) => {
    res.render('about');
});


// this routes for /customers only
// router.get('/orders', (req, res) => {
//     res.send('All orders from customers!')
// });
// router.get('/wishlist', (req, res) => {
//     res.send('Wish to buy later!')
// });
// router.get('/detail', (req, res) => {
//     res.send('customers detail!')
// });
// router.get('/account', (req, res) => {
//     res.send('customers Account check!')
// });
// router.get('/setting', (req, res) => {
//     res.send('customers account setings!')
// });
// router.get('/login', (req, res) => {
//     res.send('Customers login!')
// });
// router.get('/signup', (req, res) => {
//     res.send('customer Registration system page!')
// });
// router.get('/birthday', (req, res) => {
//     res.send('Happy birthday dear customers')
// })
module.exports = router;