var express = require("express");
var bodyParser = require('body-parser')
var app = express();
var logger = require("morgan");

app.use(bodyParser.urlencoded({extended: true}));
app.listen(3000);
app.use(logger("dev"));


app.get('/operation/:num1/:num2', function(req,res){

	console.log("num1 is " + req.params.num1);
	console.log("num2 is " + req.params.num2);

var number1 = parseInt(req.params.num1);
var number2 = parseInt(req.params.num2);
var total = number1 + number2;

if(res.params.operation == 'addition'){
	var total = number1 + number2;
	res.send("the total is " + total);
}

if (res.params.operation =='subtraction'){
	var total = number1 - number2;
	res.send("the total is " + total);
}

if (res.params.operation === 'division'){
	var total = number1 % number2;
	res.send("the total is " + total);
}

if (res.params.operation =="multiplication"){
	var total = number1 * number2;
	res.send("the total is " +  total);
}
});



