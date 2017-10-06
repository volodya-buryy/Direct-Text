//require the express nodejs module
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'www')));

//tell express what to do when the /about route is requested
app.post('/create-pdf-file', function(req, res){
    console.log(req.body)
    res.send("!!!!!!");
});

//wait for a connection
app.listen(3000, function () {
  console.log('Server is running. Point your browser to: http://localhost:3000');
});