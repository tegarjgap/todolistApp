const express = require('express');
const router = express.Router();


router.get('/tambahlist', function(req, res, next) {
	res.status(200);
	return res.render('tambahlist');
});

router.post('/tambahlist', function(req, res, next) {
	res.status(200);
	console.log(req.body.todo + " " + req.body.tanggal);
	res.redirect('/profile');
});

router.get('/login', function(req, res, next) {
	res.status(200);
	return res.render('login');
});

router.get('/signup', function(req, res, next) {
	res.status(200);
	return res.render('signup');
});


router.get('/profile', function(req, res, next) {
	if(req.session.user){
		res.status(200);
		console.log("session : " + req.session.user);
		return res.render('profile');
	} else {
		res.status(301);
		return res.redirect('/login');
	}	
});


router.post('/profile', function(req, res, next) {
	res.status(200);
	req.session.user = req.body.user;
	console.log(req.session.user);
	return res.send('profile');
});


router.get('/editlist', function(req, res, next) {
	res.status(200);
	return res.render('editlist');
});


router.get('/logout', function(req, res, next) {
	res.status(200);
	if(req.session){
		req.session.destroy(function(err) {
	    	if(err) {
	      		return next(err);
	    	} else {
	      		return res.redirect('/login');
	    	}
	    });
	}
})


module.exports = router;