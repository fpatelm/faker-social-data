const me = require('../common/me')
const chats = require('./chats')
const message = require('./message')
const calls = require('./calls')

function process(router) { 
    router.get('/whatsapp/me', function(request, response) {
        response.send(me.get());
    })

    router.get('/whatsapp/chats', function(request, response) {
        response.send(chats.get());
    })

    router.get('/whatsapp/message', function(request, response) {
        response.send(message.get());
    })

    router.get('/whatsapp/calls', function(request, response) {
        response.send(calls.get());
    })
}

module.exports = { process };