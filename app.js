const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;


//TODO: require hbs
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

// Serve static content
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Anakin',
        title: 'Home'
    });
});

app.get('/generic', (req, res) => {
    res.render('generics', {
        name: 'Anakin',
        title: 'Generic'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Anakin',
        title: 'Elements'
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});