angular.module("app").controller("MainController", ["$scope", "routeService", function($scope, routeService) {
    $scope.routes = [];
    $scope.route = {};

    function getRoutes() {
        routeService.getRoutes().then(function(success) {
            console.log(success);
            $scope.routes = success.data;
        });
    }
    getRoutes();

    $scope.addRoute = function(url, mockData) {
        routeService.addRoute(url, mockData).then(function(success) {
            $scope.routes = success.data;
            $scope.route = {};
        });
    };

    $scope.modifiRoute = function(id, url, mockData) {
        routeService.modifiRoute(id, url, mockData).then(function(success) {
            $scope.routes = success.data;
            $scope.route = {};
        });
    };

    $scope.deleteRoute = function(routeID) {
        routeService.deleteRoute(routeID).then(function(success) {
            $scope.routes = success.data;
        });
    };

    $scope.saveRoute = function() {
        if($scope.route.id) {
            $scope.modifiRoute($scope.route.id, $scope.route.url, $scope.route.mockData);
        } else {
            $scope.addRoute($scope.route.url, $scope.route.mockData);
        }
    };

    $scope.addNewRoute = function() {
        $scope.route = {};
    };

    $scope.loadRoute = function(routeData) {
        $scope.route = routeData;
    };
}]);