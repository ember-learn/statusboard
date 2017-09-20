'use strict';

module.exports = function(environment) {
    let ENV = {
        modulePrefix: 'roadmap-page',
        environment: environment,
        googleFonts: [
            'Roboto',
            'Alegreya+Sans'
        ],
        contentSecurityPolicy: {
            'font-src': "'self' fonts.gstatic.com",
            'style-src': "'self' fonts.googleapis.com"
        }
    };

    return ENV;
};