/**
 * Created by zma on 2016-04-25.
 */
var express= require('express');

var app= express();
var sql = require('mssql');

var config = {
    user: '...',
    password: '...',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
    database: '...',

    options: {
        encrypt: true // Use this if you're on Windows Azure
    }
};


sql.connect(config).then(function(err) {
    // Query

    console.log(err);
        // ... error checks
    });






var port= process.env.PORT || 8989;
var nav= [{
    Link:'/Books',
    Text: 'Book'
},{
    Link:'/Authors',
    Text: 'Author'}];


var bookRouter= require('./src/routes/bookRoutes')(nav);

//app.set(express.static('public'));
app.set('views', './src/views');
//var handlebars= require('express-handlebars');
//app.engine('.hbs', handlebars({extname: '.hbs'}));


//app.set('view engine', '.hbs');
app.set('view engine', 'ejs');



app.use('/Books', bookRouter);

app.get('/', function(req, res){

   res.render('index', {
       title:'hello from the samsu', nav: [{
       Link:'/Books',
     Text: 'Books'
   },{
       Link:'/Authors',
    Text: 'Authors'}]
});


});

app.get('/books', function(req, res){

    res.send('Hello Books');

});

app.listen(port, function(err){

    console.log('running server on port'+ port);

});