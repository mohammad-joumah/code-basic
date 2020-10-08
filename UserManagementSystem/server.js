const express = require('express');
const app = express();
const PORT = 5000;

app.set('view engine', 'hbs')
app.use(express.static(__dirname + "/public"));
app.get('/', (req, res) => {
    res.send('hallo')
})

app.listen(PORT, () => {
    console.log('the server is running in PORT: ' + PORT);
})