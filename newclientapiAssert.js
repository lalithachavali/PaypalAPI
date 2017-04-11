var https = require('https');
assert = require('assert'); 
//Function to print assestion Passed
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
var optionsget = {
    host : 'finance.google.com', // here only the domain name
	//http://finance.google.com/finance/info?client=ig&q=NSE:PYPL
    // (no http/https !)
    port : 443,
    path : '/finance/info?client=ig&q=NSE:PYPL', // the rest of the url with parameters if needed
    method : 'GET' // do GET
};
 
console.info('Options prepared:');
console.info(optionsget);
console.info('Do the GET call');
 
 
// do the GET request
var reqGet = https.request(optionsget, function(res) {
    console.log("statusCode: ", res.statusCode);
    // uncomment it for header details
//  console.log("headers: ", res.headers);
 
 
    var data = "";
    res.on('data', function(d) {
        console.info('GET result:\n');
		//data += d
		data = data + d;
		//Trim and Parse API response to be able to assert field:l
		var substrdata = data.substring(5,data.length);
		var JSondata = substrdata.substring(0,substrdata.length-2);
		//console.info("PYPL API response: "+JSondata);
		      
		var myJSON = JSON.parse(JSondata);
		//console.info("Printing parsed data"+myJSON);
		var PYPLlvalue=myJSON.l;
		//field:l returns 'undefined' if field:l is not avaialable in API response
		//console.info("PYPL field l value: "+lvalue);
		/*if (lvalue = " "){
			console.log("field 'l' assertion failed")
		}
		else {
			console.log("field 'l' assertion passed")
		}
		*/
		//field:l assetion fails if l is not returned in API response
		//myassert(lvalue,"43.04",'Assertion Failed')
		//var PYPLlvalue=lvalue; 
		console.info("PYPL field l value: "+PYPLlvalue);
		//assert.equal(lvalue,"43.04",'Assertion failed')
		//assert.notequal(lvalue,"43.04",'Assertion failed')
		
		


    });

 
});

// options for GET EBAY
var optionsget = {
    host : 'finance.google.com', // here only the domain name
	//http://finance.google.com/finance/info?client=ig&q=NSE:EBAY
    // (no http/https !)
    port : 443,
    path : '/finance/info?client=ig&q=NSE:EBAY', // the rest of the url with parameters if needed
    method : 'GET' // do GET
};
 
console.info('Options prepared:');
console.info(optionsget);
console.info('Do the GET call');
 
 
// do the GET request
var reqGet = https.request(optionsget, function(res) {
    console.log("statusCode: ", res.statusCode);
    // uncomment it for header details
//  console.log("headers: ", res.headers);
 
 
    var data = "";
    res.on('data', function(d) {
        console.info('GET result:\n');
		//data += d
		data = data + d;
		//Trim and Parse API response to be able to assert field:l
		var substrdata = data.substring(5,data.length);
		var JSondata = substrdata.substring(0,substrdata.length-2);
		//console.info("PYPL API response: "+JSondata);
		      
		var myJSON = JSON.parse(JSondata);
		//console.info("Printing parsed data"+myJSON);
		var EBAYlvalue=myJSON.l;
		//field:l returns 'undefined' if field:l is not avaialable in API response
		//console.info("EBAY field l value: "+lvalue);
		/*if (lvalue = " "){
			console.log("field 'l' assertion failed")
		}
		else {
			console.log("field 'l' assertion passed")
		}
		*/
		//field:l assetion fails if l is not returned in API response
		//myassert(lvalue,"33.91",'Assertion Failed')
		//var EBAYlvalue=lvalue; 
		console.info("EBAY field l value: "+EBAYlvalue);
		//assert.equal(lvalue,"43.04",'Assertion failed')
		//assert.notequal(lvalue,"43.04",'Assertion failed')
		
		


    });

 
});

 
reqGet.end();
reqGet.on('error', function(e) {
    console.error(e);
});
