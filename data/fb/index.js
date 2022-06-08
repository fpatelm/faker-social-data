const me = require('../common/me')
function process(app) { 
    app.get('/fb/me', function(request, response) {
        response.send(me.get());
    })
}

module.exports = { process };