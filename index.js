const fb = require('./data/fb/index')
const whatsapp = require ('./data/whatsapp/index')
var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

fb.process(app);
whatsapp.process(app);

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
})
