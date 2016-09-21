angular.module("app").controller("MainController", 
["$scope", "routeService","$mdDialog", function($scope, routeService, $mdDialog) {
    $scope.routes = [];
    $scope.route = {};

    function getRoutes() {
        routeService.getRoutes().then(function(success) {
            console.log(success);
            $scope.routes = success.data;
        });
    }
    getRoutes();

    $scope.addRoute = function(routeData) {
        routeService.addRoute(routeData).then(function(success) {
            $scope.routes = success.data;
            $scope.route = {};
        });
    };

    $scope.modifyRoute = function(routeData) {
        routeService.modifyRoute(routeData).then(function(success) {
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
            $scope.modifyRoute($scope.route);
        } else {
            $scope.addRoute($scope.route);
        }
    };

    $scope.addNewRoute = function() {
        $scope.route = {};
    };

    $scope.loadRoute = function(routeData) {
        $scope.route = routeData;
    };

    $scope.openDialog = function($event) {
        $mdDialog.show({
            targetEvent: $event,
            templateUrl: "./views/proxy-server-dialog.html",
            controller: "proxyServerDialogCtrl",
        });
    };
}]);