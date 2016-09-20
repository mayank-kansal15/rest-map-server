angular.module("app").factory("routeService", ["$http", function($http) {
    var routeFactory = {};
    routeFactory.getRoutes = function() {
        return $http.get("/routes");
    };

    routeFactory.addRoute = function(url, routeData) {
        return $http.post("/routes", {"url": url, "mockData": routeData});
    }

    routeFactory.modifiRoute = function(routeId, url, routeData) {
        return $http.put("/routes/" + routeId, {"url": url, "mockData": routeData});
    }

    routeFactory.deleteRoute = function(routeId) {
        return $http.delete("/routes/" + routeId);
    }

    return routeFactory;
}]);