const fb = require('./data/fb/index')
const whatsapp = require('./data/whatsapp/index')
const express = require('express');
const router = express.Router();

fb.process(router);
whatsapp.process(router);

module.exports = router;