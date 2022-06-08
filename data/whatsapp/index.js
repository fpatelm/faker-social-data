const me = require('../common/me')
const chats = require('./chats')
const message = require('./message')
const calls = require('./calls')

function process(app) { 
    app.get('/whatsapp/me', function(request, response) {
        response.send(me.get());
    })

    app.get('/whatsapp/chats', function(request, response) {
        response.send(chats.get());
    })

    app.get('/whatsapp/message', function(request, response) {
        response.send(message.get());
    })

    app.get('/whatsapp/calls', function(request, response) {
        response.send(calls.get());
    })
}

module.exports = { process };