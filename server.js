const express = require('express');
const app = express();

console.log('Server Started');


app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.listen(3000);