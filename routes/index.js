const express = require('express');
const router = express.Router();

// Index
router.get('/', function(req, res) {
	console.log(`It is alive!`);
    res.render('index');
});

router.get('/gameoflife', function(req, res) {
    res.redirect('http://codepen.io/EddyMogollon/full/egjOGe');
});

router.get('/url', function(req, res) {
	res.redirect('https://urled.herokuapp.com');
});

router.get('/pokebot', function(req, res) {
	res.redirect('https://github.com/Eddymogollon/fb-pokedex');
});

// Handle 404 - Keep this as a last route
router.use(function(req, res, next) {
    res.status(400);
    res.send('404: Page Not Found');
});

module.exports = router;