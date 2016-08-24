var express = require('express');
var users = require('./routes/users');

var app = express();
var PORT = process.env.PORT || 3000;

app.use('/Users', users);

app.get('/', function(req, res){
    res.send('Todo API Root');
});

app.listen(PORT, function() {
    console.log('Express listening on port ' + PORT + '!');
});
