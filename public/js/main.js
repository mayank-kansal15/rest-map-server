angular.module("app", ['ngMaterial']);         
angular.module("app").controller("MainController", ["$scope", function($scope) {
    $scope.routes = [];
    $scope.route = {};

    $scope.saveRoute = function() {
        $scope.routes.push($scope.route);
        $scope.route = {};
    };

    $scope.addNewRoute = function() {
        $scope.route = {};
    };

    $scope.loadRoute = function(routeData) {
        $scope.route = routeData;
    };
}]);