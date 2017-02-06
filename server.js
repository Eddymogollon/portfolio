'use strict';
const express = require('express');
const router = require('./routes/index');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

// serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

//set up pug
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//Include routes
app.use('/', router);

app.listen(port, function() {
	console.log(`The frontend server is running on port ${port}!`);
});