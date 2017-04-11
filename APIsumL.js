//*************************

var request = require('request');
var async = require('async');

console.log("before async");

exports.handler = function(req, res) {
	//console.log("b4 parallel");
  async.parallel([
    /*
     * First external endpoint
     */
    function(callback) {
      var url = "http://finance.google.com/finance/info?client=ig&q=NSE:EBAY";
	  
      request(url, function(err, response, body) {
		  	console.log("In Ebay request");
        // JSON body
        if(err) { console.log(err); callback(true); return; }
		var substrdata = body.substring(5,body.length);
		var JSondata = substrdata.substring(0,substrdata.length-2);
		console.info("Printing final data"+JSondata);		      
		var myJSON = JSON.parse(JSondata);
        //obj = JSON.parse(body);
		console.log("obj"+myJSON);
        callback(false, myJSON);
      });
    },
    /*
     * Second external endpoint
     */
    function(callback) {
      var url = "http://finance.google.com/finance/info?client=ig&q=NSE:PYPL";
      request(url, function(err, response, body) {
		  	console.log("In Paypal request");
        // JSON body
        if(err) { console.log(err); callback(true); return; }
        var substrdata = body.substring(5,body.length);
		var JSondata = substrdata.substring(0,substrdata.length-2);
		console.info("Printing final data"+JSondata);		      
		var myJSON = JSON.parse(JSondata);
        //obj = JSON.parse(body);
		console.log("obj"+myJSON);
        callback(false, myJSON);
      });
    },
  ],
  /*
   * Collate results
   */
  function(err, results) {
    if(err) { console.log(err); res.send(500,"Server Error"); return; }
	console.log(results);
	console.log(Number(results[0].l)+Number(results[1].l))
    //res.send({api1:results[0], api2:results[1]});
  }
  );
};

console.log(exports.handler())




