var express = require('express');

var app = express();
require('./config')(app);

var port = 2707;
app.listen(port);
