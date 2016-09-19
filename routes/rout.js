module.exports = function(routesList, lastRouteID) {
    var express = require("express");
    var router = express.Router();

    router.get("/", function(req, res) {

    });

    router.post("/", function(req, res) {
        lastRouteID++;
        routesList.push({
            url: req.body.url,
            mockData: req.body.mockData,
            id: lastRouteID
        });
    });

    router.get("/:id", function(req, res) {

    });

    router.put("/:id", function(req, res) {
        
    });

    router.delete("/:id", function(req, res) {
        
    });
    return router;
}
