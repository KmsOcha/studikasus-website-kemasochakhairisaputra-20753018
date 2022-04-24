const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const hbs = require('hbs');
const app = express();

//views file
app.set('views', path.join(__dirname, 'views'));

//view engine
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//folder public sebagai static folder untuk static file
app.use('/assets', express.static(__dirname + '/public'));

//homepage
app.get ('/index', (req, res) => {
    res.render('index_view');
});

//contact
app.get ('/contact', (req, res) => {
    res.render('contact_view');
});

//about
app.get ('/about', (req, res) => {
    res.render('about_view');
});

//cv
app.get ('/cv', (req, res) => {
    res.render('cv_view');
});



//Server listening
app.listen(8000,() => {
    console.log('Server started on port 8000...');
});