module.exports = function(routesList, lastRouteID) {
    var express = require("express");
    var jsonfile = require('jsonfile')
    var router = express.Router();


    router.get("/", function(req, res) {
        res.status(200).json(routesList);
    });

    router.post("/", function(req, res) {
        lastRouteID++;
        routesList.push({
            url: req.body.url,
            mockData: req.body.mockData,
            id: lastRouteID
        });
        persistRoutesIntoFile();
        res.status(201).json(routesList);
    });

    router.put("/:id", function(req, res) {
        var routeId = Number(req.params.id);
        var routeIndex = getRouteIndexById(routeId);
        if(routeIndex === -1) {
            res.status(400).send(`No route exist for id ${routeId}`);
        } else {
            routesList.splice(routeIndex, 1);
            routesList.push({
                id: routeId,
                url: req.body.url,
                mockData: req.body.mockData
            });
            persistRoutesIntoFile();
            res.status(200).json(routesList);
        }
    });

    router.delete("/:id", function(req, res) {
        var routeId = Number(req.params.id);
        var routeIndex = getRouteIndexById(routeId);
        if(routeIndex === -1) {
            res.status(400).send(`No route exist for id ${routeId}`);
        } else {
            routesList.splice(routeIndex, 1);
            persistRoutesIntoFile();
            res.status(200).json(routesList);
        }
    });

    function getRouteIndexById(routeId) {
        for(var i = 0; i < routesList.length; i++) {
            if(routeId === routesList[i].id) {
                return i;
            }
        }
        return -1;
    }

    function persistRoutesIntoFile() {
        var file = 'routesData.json';
        jsonfile.writeFile(file, routesList, function (err) {
            console.error(err);
        })
    }

    return router;
}
