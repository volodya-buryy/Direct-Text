//require the express nodejs module
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require("path");
let pdf = require('html-pdf');
var options = { format: 'Letter' };


app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(express.static(path.join(__dirname, 'www')));

//tell express what to do when the /about route is requested
app.post('/create-pdf-file', function(req, res){
    console.log(req.body.data.data)
    var str = req.body.data.data;
    pdf.create(str, options).toFile(`./businesscard${new Date()}.pdf`, function(err, res) {
    if (err) return console.log(err);
        console.log(res); // { filename: '/app/businesscard.pdf' }
    });
    res.send('Ok')
});

//wait for a connection
app.listen(3000, function () {
  console.log('Server is running. Point your browser to: http://localhost:3000');
});