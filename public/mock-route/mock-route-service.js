angular.module("app").factory("mockRouteService", ["$http", function($http) {
    var routeFactory = {};
    routeFactory.getRoutes = function() {
        return $http.get("/routes");
    };

    routeFactory.addRoute = function(routeData) {
        return $http.post("/routes", routeData);
    }

    routeFactory.modifyRoute = function(routeData) {
        return $http.put("/routes/" + routeData.id, routeData);
    }

    routeFactory.deleteRoute = function(routeId) {
        return $http.delete("/routes/" + routeId);
    }

    return routeFactory;
}]);