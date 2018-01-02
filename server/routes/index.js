const express = require('express');
const router = express.Router();
const Activity = require('../models/useractivity.js');
const Data = require('../models/userdata.js');
const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost:27017/tasklist');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));


router.post('/tambahlist', function(req, res, next) {
	res.status(200);
	var tambahTampung = {
		task: req.body.todo,
		date: req.body.tanggal
	};
	console.log(tambahTampung);
	Activity.create(tambahTampung);
	return res.send('200');
})

router.post("/adduser", function(req, res, next) {
	if(req.body.user && req.body.pass){
		res.status(200);
		var tambahTampung = {
		username: req.body.user,
		password: req.body.pass
		}
		console.log("userdata:" + tambahTampung);
		Data.create(tambahTampung);
		//return res.redirect('http://127.0.0.1:3001/profile');
		return res.send('200');
	} else {
		return res.send('Yang lengkap dong.');
	}
});

router.get("/userdata", function(req, res, next) {
	res.status(200);
	Data.find((err, userdata) =>{  
	    if (err) {
	        res.status(500).send(err)
	    } else {
	    	console.log(userdata);
	    	return res.json(userdata);
    	}
	});
});


router.get("/useractivity", function(req, res, next) {
	res.status(200);
	//res.send("USERACTIVITY COY");

	Activity.find((err, useractivity) =>{  
	    if (err) {
	        res.status(500).send(err)
	    } else {
	    	console.log(useractivity);
	    	return res.json(useractivity);
    	}
	});

});

router.post("/checkuser", function(req, res, next) {
	user = req.body.user;
	pass = req.body.pass;

	Data.find({username: user, password: pass}, (err, userdata) => {
		if (err) {
			res.send("error");
		} else {
			if(userdata.length === 1){
				console.log(userdata[0].username + " /LOGIN /PROFILE");
				return res.send('200');
			} else {
				return res.send('404');
			}
		}
	})
})

module.exports = router;