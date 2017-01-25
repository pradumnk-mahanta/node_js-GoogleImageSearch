var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(bodyParser.json());
// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.post('/searchtext', function(request, response) {
  console.log('You searched for: ' + request.body.searchQuery);
  response.json(JSON.stringify({success : "Data Processed Successfully", status : 200}));
});

app.listen(app.get('port'), function() {
  console.log('Node Application is Running on PORT:', app.get('port'));
});
