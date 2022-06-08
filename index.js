
import {route} from './routes.js'
import express from 'express'
var app = express()
const port = process.env.PORT || "5000";

app.set('port', port);
app.use('/', route);
app.listen(port, () => console.log(`Node app is running at localhost: ${port}`))
