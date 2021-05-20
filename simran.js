var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express(); //initalize the express

//logger middleware it should always be ddefined above.. order matters here.
var logger = function(req, res, next){
console.log('logging..');
next();
};
app.use(logger);

//view engine middleware using ejs here which is Embedded Javascript templates 

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))


//another middleware is body parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// static to route to a single path
app.use(express.static(path.join(__dirname,'client')));




var people = {
simran: "happy"
};

app.get('/', function(req,res){ // '/' is home page
res.render('index');
});

app.listen(3000, function(){
    console.log('simran');
}
); 
