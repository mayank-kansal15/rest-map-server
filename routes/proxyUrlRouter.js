var request = require("request");

module.exports = function(proxySetting) {
    return function(req, res) {
        if(proxySetting.global === undefined) {
            return res.status(404).send("Resource not found");
        }
        var url = proxySetting.global.url + req.url;
        console.log("Forwarding request to: " + url);
        try {
            req.pipe(request(url)).pipe(res);
        } catch(e) {
            console.log(e);
        }
    };
};  