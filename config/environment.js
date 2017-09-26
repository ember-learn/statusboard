'use strict';

module.exports = function(environment) {
    let ENV = {
        modulePrefix: 'roadmap-page',
        environment: environment,
        contentSecurityPolicy: {
            'font-src': "'self' fonts.gstatic.com",
            'style-src': "'self' fonts.googleapis.com emberjs.com glimmer-styleguide.global.ssl.fastly.net",
            'script-src': "'self' cdnjs.cloudflare.com glimmer-styleguide.global.ssl.fastly.net"
        }
    };

    return ENV;
};
