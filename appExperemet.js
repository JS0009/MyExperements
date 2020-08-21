const express = require('express');

let app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/news1', (req, res) => {
    let obj = { title: 'Heber', id: 4, paragrafs: ['Праграф', 'Обычный текст', 'Числа: 2, 6,5', 99] };
    res.render('news', { obj: obj });
});

app.listen(3000);
console.log('connection');
