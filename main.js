'use strict'
var request = require('request');
var express = require('express');
var app = express();
var _ = require('lodash');
var bodyParser = require('body-parser');

app.use('/public',express.static('public'));

app.set('view engine', 'ejs');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/mydata',urlencodedParser, function (req, res) {
console.log('dsda');
    var location = req.body.destination;
	console.log(req.body.destination+'ds'+location);
    var checkIn = req.body.checkIn || '20160505';
    var checkOut = req.body.checkOut || '20160508';
	
    var maxPrice = req.body.maxPrice || 100;    
    var minPrice = req.body.minPrice || 0;  
	  var rating =req.body.rating|| 5; 

    request('http://www.priceline.com/pws/v0/stay/integratedlisting/' + location , function (error, responseData, body) {
        
        body = JSON.parse(body);

        var results = _.filter(body.hotels, function(item) {
			
            return parseInt(item.ratesSummary.minPrice) < parseInt(maxPrice) && parseInt(item.ratesSummary.minPrice) >= parseInt(minPrice) && item.overallGuestRating/2 <=rating;
        });
		
        res.render(__dirname+"/public/views/hotels",{title:'hotels',
		                                             results:results});
    });

});
app.get('/', function (req, res) {
	
	res.sendFile(__dirname+"/public/index.html");
	
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
