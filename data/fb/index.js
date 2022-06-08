import me from '../common/me.js'

export function fb(router) { 
    router.get('/fb/me', function(request, response) {
        response.send(me());
    })
}