const solarRoute = require('./solar');

function route(app) {
    app.use('/api', solarRoute);
}

module.exports = route;
