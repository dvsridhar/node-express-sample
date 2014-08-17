var express = require('express');
var router = express.Router();
var nano = require('nano')('http://localhost:5984');
/* GET home page. */
router.get('/', function(req, res) {
var alice = nano.use('alice');
	alice.get('rabbit', { revs_info: true }, function(err, body) {
	  if (!err){
//	  console.log(body);
//	  res.render("hello");
//	  res.render('index', { title: "Hello" });	  
	   res.render(200, JSON.stringify(body));	  
	  }
    });
});

module.exports = router;
