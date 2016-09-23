angular.module("app").controller("mockRouteController", 
["$scope", "mockRouteService","$mdDialog", "appConstantService", function($scope, mockRouteService, $mdDialog, appConstantService) {
    $scope.isError = false;

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
        $scope.route.mockData = JSON.parse($scope.route.mockData);
        console.log($scope.route);
        if($scope.route.id) {
            $scope.modifyRoute($scope.route);
        } else {
            $scope.addRoute($scope.route);
        }
    };

    $scope.isInvalidJSON = function() {
        try {
            JSON.parse($scope.route.mockData);
            $scope.form.mockNewRouteForm.mockData.$setValidity("pattern", true);
        } catch(e) {    
            $scope.form.mockNewRouteForm.mockData.$setValidity("pattern", false);
        }
    };

    function setEmptyRoute(){
        $scope.route = {mockType: 'mocked', overrideGlobalSetting: false};
    }
}]);