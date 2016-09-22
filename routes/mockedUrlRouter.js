var request = require("request");

module.exports = function(routeList) {
    return function(req, res, next) {
        var savedRoute = null;
        routeList.forEach(function(route) {
            if(req.originalUrl === route.url) {
                savedRoute = route;
            }
        });
        if(savedRoute === null) {
            return next();
        }
        if(savedRoute.mockType === "mocked") {
            return res.status(200).json(savedRoute.mockData);
        }
        if(savedRoute.mockType === "remote" && savedRoute.overrideGlobalSetting === false) {
            return next();
        }
        if(savedRoute.mockType === "remote" && savedRoute.overrideGlobalSetting === true) {
            var url = savedRoute.proxyUrl + req.url;
            console.log("Forwarding request to: " + url);
            req.pipe(request(url)).pipe(res);
        }
    };
}