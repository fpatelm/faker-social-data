const routes = require("./routes");
var express = require('express')
var app = express()
const port = process.env.PORT || "5000";

app.set('port', port);
app.use('/', routes);
app.listen(port, () => console.log(`Node app is running at localhost: ${port}`))
