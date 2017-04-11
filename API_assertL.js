//Pre-Requisite: Manually open the node.js server instance before executing this script

var https = require('https');
assert = require('assert'); 
var PYPLlvalue=" ";
var EBAYlvalue=" ";
var SUM=(PYPLlvalue+EBAYlvalue)
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
// options for GET PYPL
var optionsgetPYPL = {
    host : 'finance.google.com', // here only the domain name
	//http://finance.google.com/finance/info?client=ig&q=NSE:PYPL
    // (no http/https !)
    port : 443,
    path : '/finance/info?client=ig&q=NSE:PYPL', // the rest of the url with parameters if needed
    method : 'GET' // do GET
};
// options for GET EBAY
var optionsgetEBAY = {
    host : 'finance.google.com', // here only the domain name
	//http://finance.google.com/finance/info?client=ig&q=NSE:EBAY
    // (no http/https !)
    port : 443,
    path : '/finance/info?client=ig&q=NSE:EBAY', // the rest of the url with parameters if needed
    method : 'GET' // do GET
};
 
 // options for GET PP
var optionsgetPP = {
    host : 'finance.google.com', // here only the domain name
	//http://finance.google.com/finance/info?client=ig&q=NSE:PP
    // (no http/https !)
    port : 443,
    path : '/finance/info?client=ig&q=NSE:PP', // the rest of the url with parameters if needed
    method : 'GET' // do GET
};
//Call PYPL API and assert the field "l" :
console.info('getPYPL Options:');
console.info(optionsgetPYPL);
console.info('Getting PYPL API');
 
 
// do the GET request
var reqGet = https.request(optionsgetPYPL, function(res) {
    console.log("PYPL statusCode: ", res.statusCode);
    // uncomment it for header details
//  console.log("headers: ", res.headers);
 if(res.statusCode==200){
			console.log("PYPL API Response: OK");
 
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
		//var lkey = Object.keys(myJSON)[3];
		var assertion=myJSON.hasOwnProperty('l')
		//console.log(myJSON.hasOwnProperty('l'));
		//assert();

		console.log("PYPL Field 'l' asserted: "+assertion);
		PYPLlvalue=myJSON.l;
		
		console.info("PYPL field l value: "+PYPLlvalue);
		//console.log("passed");
		//myassert(lkey,'l','Assertion Failed')
		
		//assert.equal(lvalue,"43.04",'Assertion failed')
		//assert.notequal(lvalue,"43.04",'Assertion failed')
		
		


    });
    } else {
			console.log("PYPL API Response Error: Bad Request")
		}
 
});

reqGet.end();

//Call EBAY API and assert the field "l" :
console.info('getEBAY Options:');
console.info(optionsgetEBAY);
console.info('Getting EBAY API');

// do the GET request
var reqGet = https.request(optionsgetEBAY, function(res) {
    console.log("EBAY statusCode: ", res.statusCode);
    // uncomment it for header details
//  console.log("headers: ", res.headers);
 if(res.statusCode==200){
			console.log("EBAY API Response: OK");
 
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
		//var lkey = Object.keys(myJSON)[3];
		var assertion=myJSON.hasOwnProperty('l')
		//console.log(myJSON.hasOwnProperty('l'));
		//assert();

		console.log("EBAY Field 'l' asserted: "+assertion);
		EBAYlvalue=myJSON.l;
		console.info("EBAY field l value: "+EBAYlvalue);
		//console.log("passed");
		//myassert(lkey,'l','Assertion Failed')
		
		//assert.equal(lvalue,"43.04",'Assertion failed')
		//assert.notequal(lvalue,"43.04",'Assertion failed')
		
		});

    } else {
			console.log("EBAY API Response Error: Bad Request")
		}
});

reqGet.end();
//Call PP API and assert the field "l" :
console.info('getPP Options:');
console.info(optionsgetPP);
console.info('Getting PP API');
 
 
// do the GET request
var reqGet = https.request(optionsgetPP, function(res) {
    console.log("PP statusCode: ", res.statusCode);
	if(res.statusCode==200){
			console.log("PP API Response: OK");
			
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
		//var lkey = Object.keys(myJSON)[3];
		var assertion=myJSON.hasOwnProperty('l')
		//console.log(myJSON.hasOwnProperty('l'));
		//assert();

		console.log("PP Field 'l' asserted: "+assertion);
		var PPlvalue=myJSON.l;
		console.info("PP field l value: "+PPlvalue);
		//console.log("passed");
		//myassert(lkey,'l','Assertion Failed')
		
		//assert.equal(lvalue,"43.04",'Assertion failed')
		//assert.notequal(lvalue,"43.04",'Assertion failed')
		
	
    });

		} else {
			console.log("PP API Response Error: Bad Request")
		}
		
		//assert.equal(lvalue,"43.04",'Assertion failed')
		//assert.notequal(lvalue,"43.04",'Assertion failed')
		
});
reqGet.end();
//assert sum of values for field "l"
/* console.log("Sum: " +SUM);
		myassert(SUM,"76.95",'Assertion Failed')  */


reqGet.on('error', function(e) {
    console.error(e);
});

