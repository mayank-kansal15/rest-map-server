var jsonfile = require('jsonfile')
var fs = require("fs");

module.exports = {
    loadIntitialRoutes: function() {
        var routesData = [];
        if(fs.existsSync('routesData.json')){
            var data = jsonfile.readFileSync('routesData.json');
            routesData = data || [];
        }
        return routesData;
    },
    getMaxIDValue: function(routeList) {
        var maxIDValue = 0;
        routeList.forEach(function(route) {
            if(route.id > maxIDValue) {
                maxIDValue = route.id;
            }
        });
        return maxIDValue;
    }
};