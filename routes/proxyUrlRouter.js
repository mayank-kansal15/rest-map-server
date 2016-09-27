var request = require("request");

module.exports = function(proxySetting) {
    return function(req, res, next) {
        if(req.url.includes("/routes") || req.url === "/proxy-setting/global") {
            return next();
        }
        if(proxySetting.global === undefined) {
            console.error("Global Proxy Server setting is not configured");
            return res.status(404).send("Global Proxy Server setting is not configured");
        }
        var url = proxySetting.global.url + req.url;
        url = url.replace(/([^:]\/)\/+/g, "$1") // replacing multiple slashes with one
        console.log("Forwarding request to: " + url);
        req.pipe(request(url)).pipe(res);
    };
};