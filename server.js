var express = require('express');
var morgan = require('morgan');

var app = express();



//middlewares
app.use(morgan('combined'))
    .use(express.static(__dirname + '/public'));


//moteur de templates
app.set('view engine', 'ejs');

// gestion des routes
app.get('/', function(request, response) {
    response.render('accueil')
});
app.get('/courses', function(request, response) {
        response.render('courses')
    })
    .get('/coursesDetails', function(request, response) {
        response.render('courses_details')
    })
    .get('/contact', function(request, response) {
        response.render('contact')
    })
    .get('/about', function() {
        response.render('about')
    });
//gestion des erreurs 404

app.use(function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

app.listen(8080, function() {
    console.log('Server running at localhost:8080');
});