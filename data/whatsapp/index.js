import  me  from '../common/me.js'
import { chats } from './chats.js'
import { message } from './message.js'
import { calls } from './calls.js'
import { people } from './people.js'

export function whatsapp(router) { 
    router.get('/whatsapp/me', function(request, response) {
        response.send(me());
    })

    router.get('/whatsapp/chats', function(request, response) {
        response.send(chats());
    })

    router.get('/whatsapp/message', function(request, response) {
        response.send(message());
    })

    router.get('/whatsapp/calls', function(request, response) {
        response.send(calls());
    })

    router.get('/whatsapp/people', function(request, response) {
        response.send(people());
    })
}