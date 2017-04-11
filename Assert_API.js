/*var express = require('express')
     var app = express.createServer()
     app.listen(8000)
     var msgs = []

     app.get('/', function(req, res) {
        res.send('Welcome to Node Twitter')
     })

     app.post('/send', express.bodyParser(), function(req, res) {
        if (req.body && req.body.tweet) {
           msgs.push(req.body.tweet)
           res.send({status:"ok", message:"Message received"})
        } else {
            res.send({status:"nok", message:"Message not received"})
        }
    })

    app.get('/tweets', function(req,res) {
    res.send(msgs)
    })
	
	*/
	
	var http = require('http');
assert = require('assert');
var opts = {
  host : 'finance.google.com', // here only the domain name
	//http://finance.google.com/finance/info?client=ig&q=NSE:EBAY
    // (no http/https !)
    port : 443,
    path : '/finance/info?client=ig&q=NSE:PYPL', // the rest of the url with parameters if needed
    method : 'GET' // do GET
};

var req = http.request(opts, function(res) {
 res.setEncoding('utf8')
 var data = "";
res.on('data', function(d) {
  data += d
})
res.on('end', function() {
  assert.strictEqual(data, {
"id": "544563045789670"
,"t" : "PYPL"
,"e" : "NASDAQ"
,"l" : "43.04"
,"l_fix" : "43.04"
,"l_cur" : "43.04"
,"s": "0"
,"ltt":"4:00PM EDT"
,"lt" : "Apr 7, 4:00PM EDT"
,"lt_dts" : "2017-04-07T16:00:02Z"
,"c" : "+0.14"
,"c_fix" : "0.14"
,"cp" : "0.33"
,"cp_fix" : "0.33"
,"ccol" : "chg"
,"pcls_fix" : "42.9"
})
 });

req.write('tweet=test')
req.end()