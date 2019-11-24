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
//laptop is here
app.get('/Acer-Nitro-5-AN515-54-58TJ', function (req, res) {
    res.render('laptop/an515-54-58TJ.handlebars');
});
app.get('/Acer-Swift-3S-SF314-57G-52GB', function (req, res) {
    res.render('laptop/Acer Swift 3S SF314-57G-52GB.handlebars');
});
app.get('/ASUS-ROG-Strix-G-G531GD-AL025T', function (req, res) {
    res.render('laptop/ASUS ROG Strix G G531GD-AL025T.handlebars');
});
app.get('/ASUS-ZenBook-Pro-15-UX580GE-i7', function (req, res) {
    res.render('laptop/ASUS ZenBook Pro 15 UX580GE - i7.handlebars');
});
app.get('/HP-Pavilion-Gaming-15-dk0001tx', function (req, res) {
    res.render('laptop/HP Pavilion Gaming 15-dk0001tx.handlebars');
});
app.get('/LENOVO-THINKPAD-X1-CARBON-6-CORE-I5,-8GB', function (req, res) {
    res.render('laptop/LENOVO THINKPAD X1 CARBON 6 - CORE I5, 8GB.handlebars');
});
app.get('/LENOVO-THINKPAD-X1-YOGA-G3-20LDS00L00', function (req, res) {
    res.render('laptop/LENOVO THINKPAD X1 YOGA G3 20LDS00L00.handlebars');
});
app.get('/MSI-GF63-Thin-9RCX-645VN', function (req, res) {
    res.render('laptop/MSI GF63 Thin 9RCX-645VN.handlebars');
});
app.get('/MSI-GL65-9SDK-054VN', function (req, res) {
    res.render('laptop/MSI GL65 9SDK-054VN.handlebars');
});
app.get('/MSI-Prestige-14-A10RB-028VN', function (req, res) {
    res.render('laptop/MSI Prestige 14 A10RB-028VN.handlebars');
});
app.get('/May-tinh-xach-tay', function (req, res) {
    res.render('may-tinh-xach-tay.handlebars');
});
//end of laptop
//dien thoai is here
app.get('/dien-thoai', function (req, res) {
    res.render('dien-thoai.handlebars');
});

app.get('/BlackBerry-KEY2', function (req, res) {
    res.render('smartphone/BlackBerry KEY2.handlebars');
});
app.get('/Huawei-P30-Pro', function (req, res) {
    res.render('smartphone/Huawei P30 Pro.handlebars');
});
app.get('/iPhone-11-Pro-Max-256GB', function (req, res) {
    res.render('smartphone/iPhone 11 Pro Max 256GB.handlebars');
});
app.get('/iPhone-X-64GB', function (req, res) {
    res.render('smartphone/iPhone X 64GB.handlebars');
});
app.get('/iPhone-Xs-Max-64GB', function (req, res) {
    res.render('smartphone/iPhone Xs Max 64GB.handlebars');
});
app.get('/OPPO-Reno-10x-Zoom-Edition', function (req, res) {
    res.render('smartphone/OPPO Reno 10x Zoom Edition.handlebars');
});
app.get('/Samsung-Galaxy-A80', function (req, res) {
    res.render('smartphone/Samsung Galaxy A80.handlebars');
});
app.get('/Samsung-Galaxy-S10', function (req, res) {
    res.render('smartphone/Samsung Galaxy S10.handlebars');
});
app.get('/Vivo-V17-Pro', function (req, res) {
    res.render('smartphone/Vivo V17 Pro.handlebars');
});
app.get('/Xiaomi-Redmi-8', function (req, res) {
    res.render('smartphone/Xiaomi Redmi 8.handlebars');
});

//end of dien thoai
app.get('/dang-nhap', function (req, res) {
    res.render('dang-nhap.handlebars');
});
app.get('/dang-ky', function (req, res) {
    res.render('dang-ky.handlebars');
});
app.get('/ho-tro', function (req, res) {
    res.render('contact.handlebars');
});
app.listen(3000,()=>{
    console.log('Web Server is running at http://localhost:3000');
});