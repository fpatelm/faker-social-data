const me = require('../common/me')
function process(router) { 
    router.get('/fb/me', function(request, response) {
        response.send(me.get());
    })
}

module.exports = { process };