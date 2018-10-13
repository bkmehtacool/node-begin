var express = require('express');

var app  = express();

app.set('view engine','ejs');

app.use('/css', express.static('css'));

app.get('/profile/:name', function(req,res){
     res.render('profile');
     console.log();
});

app.listen(3000);
