var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');
var app = express();
var url = require("url");
app.use(express.static(__dirname+'/public'));
//app.use(express.static(path.join(__dirname, '/style')));
app.set('views', path.join(__dirname, 'views'));
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
app.get('/May-tinh-xach-tay', function (req, res) {
    res.render('may-tinh-xach-tay.handlebars');
});
app.get('/ho-tro', function (req, res) {
    res.render('contact.handlebars');
});
app.listen(3000,()=>{
    console.log('Web Server is running at http://localhost:3000');
});