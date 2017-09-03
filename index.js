'use strict';

exports.register = function(server, options, next) {
    console.log(options)
    server.route({
        method: 'GET',
        path: '/test',
        handler: function(request, reply) {
            reply('a=' + options.a);
        }
    });

    next();
};


exports.register.attributes = {
    pkg: require('./package.json')
};