var express = require("express");
var router = express.Router();
var jsonfile = require("jsonfile");

module.exports = function(proxySettings) {

    router.get("/global", function(req, res) {
        if(proxySettings.global === undefined) {
            return res.status(204).json({});
        } else {
            res.status(200).json(proxySettings.global);
        }
    });

    router.post("/global", function(req, res) {
        proxySettings.global = {
            url: req.body.url
        }
        persistSetting();
        res.status(201).send("");
    });

    function persistSetting() {
        var file = "proxy-server-settings.json";
        jsonfile.writeFile(file, proxySettings, function (err) {
            console.error(err);
        });
    }
    
    return router;
};