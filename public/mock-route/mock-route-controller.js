angular.module("app").controller("mockRouteController", 
["$scope", "mockRouteService","$mdDialog", "appConstantService", function($scope, mockRouteService, $mdDialog, appConstantService) {
    setEmptyRoute();

    $scope.$on(appConstantService.events.selectedRouteChanged, function(event, route) {
        $scope.route = route;
    });

    $scope.addRoute = function(routeData) {
        mockRouteService.addRoute(routeData).then(function(success) {
            $scope.$emit(appConstantService.events.mockedRoutesChanged, success.data);
            setEmptyRoute();
        });
    };

    $scope.modifyRoute = function(routeData) {
        mockRouteService.modifyRoute(routeData).then(function(success) {
            $scope.$emit(appConstantService.events.mockedRoutesChanged, success.data);
            setEmptyRoute();
        });
    };

    $scope.deleteRoute = function(routeID) {
        mockRouteService.deleteRoute(routeID).then(function(success) {
            $scope.$emit(appConstantService.events.mockedRoutesChanged, success.data);
            setEmptyRoute();
        });
    };

    $scope.saveRoute = function() {
        if($scope.route.id) {
            $scope.modifyRoute($scope.route);
        } else {
            $scope.addRoute($scope.route);
        }
    };

    $scope.loadRoute = function(routeData) {
        $scope.route = routeData;
    };

    function setEmptyRoute(){
        $scope.route = {mockType: 'mocked', overrideGlobalSetting: false};
    }
}]);