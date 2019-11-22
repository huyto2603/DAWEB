var express = require('express');
var exphbs  = require('express-handlebars');
 
var app = express();
 
app.engine('handlebars', exphbs({
    defaultLayout: 'main.handlebars',
    layoutsDir: 'views/layouts/'
}));
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('home.handlebars');
});
app.get('/Acer-Nitro-5-AN515-54-58TJ', function (req, res) {
    res.render('an515-54-58TJ.handlebars');
});
app.listen(3000,()=>{
    console.log('Web Server is running at http://localhost:3000');
});