//Pre-Requisite: Manually open the node.js server instance and install npm https and assert, before executing this script
var https = require('https');
assert = require('assert');

var ebayValue = ""
var paypalValue = ""

function assignEbay (value){ebayValue = value; console.log("Field 'l' value from ebay function: "+ebayValue )}
function assignPayPal(value){paypalValue = value; console.log("Field 'l' value from paypal function"+paypalValue )}

function sumAssert(){
	console.log("In Sum Assert")
	console.log("EBAYVALUE---> "+ebayValue);
	console.log("PAYPAL VALUE---> "+paypalValue);
		console.log("SUM  VALUE---> "+ (Number(ebayValue)+Number(paypalValue)));

	
	//console.log(ebayValue+paypalValue);
}

 
function myassert(a,b, message) {
			if (a!=b) {
				message = message || "Assertion failed";
				if (typeof Error !== "undefined") {
					throw new Error(message);
				}
				throw message; // Fallback
			} else {
				console.log("Assertion passed");
			}
		}
		
		
/**
 * HOW TO Make an HTTP Call - GET
 */
// options for GET
var optionsgetEbay = {
    host : 'finance.google.com', // here only the domain name
	//http://finance.google.com/finance/info?client=ig&q=NSE:EBAY
    // (no http/https !)
    port : 443,
    path : '/finance/info?client=ig&q=NSE:PYPL', // the rest of the url with parameters if needed
    method : 'GET' // do GET
};

// options for GET
var optionsgetPaypal = {
    host : 'finance.google.com', // here only the domain name
	//http://finance.google.com/finance/info?client=ig&q=NSE:EBAY
    // (no http/https !)
    port : 443,
    path : '/finance/info?client=ig&q=NSE:EBAY', // the rest of the url with parameters if needed
    method : 'GET' // do GET
};

// options for GET
var optionsgetPP = {
    host : 'finance.google.com', // here only the domain name
	//http://finance.google.com/finance/info?client=ig&q=NSE:EBAY
    // (no http/https !)
    port : 443,
    path : '/finance/info?client=ig&q=NSE:PP', // the rest of the url with parameters if needed
    method : 'GET' // do GET
};
 
console.info('Options prepared:');
console.info(optionsgetEbay);
//console.info('Do the GET call');
 
var EventEmitter = require("events").EventEmitter;
var ebaylvalue = new EventEmitter();

//var ebaylvalue="";
var paypallvaue= new EventEmitter();
// do the GET request
var reqGet = https.request(optionsgetEbay, function(res) {
    console.log("statusCode: ", res.statusCode);
    // uncomment it for header details
//  console.log("headers: ", res.headers);
 
 //console.info("ebayvalue OUT-->"+ebaylvalue);
    var data = "";
    res.on('data', function(d) {
        //console.info('GET result:\n');
		//data += d
		data = data + d;
		//process.stdout.write("data inside function-->"+data);
		var substrdata = data.substring(5,data.length);
		var JSondata = substrdata.substring(0,substrdata.length-2);
		//console.info("Printing final data"+JSondata);
		      
		var myJSON = JSON.parse(JSondata);
		//console.info("Printing parsed data"+myJSON);
		//var lkey=myJSON.l;
		ebaylvalue.data= myJSON.l;
		ebaylvalue.emit('update');
		//console.log("printing ebaylvalue-->"+ebaylvalue)
		var lkey = Object.keys(myJSON)[3];
		//console.log(myJSON.hasOwnProperty('l'));
		//assert();

		/* console.log("Printing EBAY l key: "+lkey);
		//console.log("passed");
		myassert(lkey,'l','Assertion Failed')
		 */
		//assert.equal(lvalue,"43.04",'Assertion failed')
		//assert.notequal(lvalue,"43.04",'Assertion failed')
		
		


    });

 
});

ebaylvalue.on('update', function () {
	assignEbay(ebaylvalue.data)
    //console.log("Printing ebayvalue out--->"+ebaylvalue.data); // HOORAY! THIS WORKS!
});

reqGet.end();


console.info('Options prepared:');
console.info(optionsgetPaypal);
//console.info('Do the GET call');

// do the GET request
var reqGet = https.request(optionsgetPaypal, function(res) {
    console.log("statusCode: ", res.statusCode);
    // uncomment it for header details
//  console.log("headers: ", res.headers);
 
 
    var data = "";
    res.on('data', function(d) {
        //console.info('GET result:\n');
		//data += d
		data = data + d;
		//process.stdout.write("data inside function-->"+data);
		var substrdata = data.substring(5,data.length);
		var JSondata = substrdata.substring(0,substrdata.length-2);
		//console.info("Printing final data"+JSondata);
		      
		var myJSON = JSON.parse(JSondata);
		//console.info("Printing parsed data"+myJSON);
		paypallvaue.data= myJSON.l;
		paypallvaue.emit('update');
		//var lkey=myJSON.l;
		var lkey = Object.keys(myJSON)[3];
		//console.log(myJSON.hasOwnProperty('l'));
		//assert();

		/* console.log("Printing PYPL l key: "+lkey);
		//console.log("passed");
		myassert(lkey,'l','Assertion Failed') */
		
		//assert.equal(lvalue,"43.04",'Assertion failed')
		//assert.notequal(lvalue,"43.04",'Assertion failed')
		
		


    });

 
});

paypallvaue.on('update', function () {
	assignPayPal(paypallvaue.data)
	//sumAssert();
	//var Sum=ebayValue+paypalValue
	//assert SUM with 77.11
	var Sum = (Number(ebayValue)+Number(paypalValue))
	console.log("Sum:  "+Sum); 
	myassert(Sum,76.68,'Assertion Failed: Expected Sum-76.68');
	//myassert((ebayValue+paypalValue),77.11,'Assertion Failed');
	//myassert((Number(ebayValue)+Number(paypalValue),'77.11','Assertion Failed');
    //console.log("Printing ebayvalue out--->"+ebaylvalue.data); // HOORAY! THIS WORKS!
});
 
reqGet.end();


reqGet.on('error', function(e) {
    console.error(e);
});