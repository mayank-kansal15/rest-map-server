angular.module("app").controller("mockRouteController", 
["$scope", "mockRouteService","$mdDialog", "appConstantService", function($scope, mockRouteService, $mdDialog, appConstantService) {
    $scope.form = {};
    $scope.route = {mockType: 'mocked', overrideGlobalSetting: false};

    $scope.$on(appConstantService.events.selectedRouteChanged, function(event, route) {
        resetForm();
        $scope.route = angular.copy(route);
    });

    $scope.addRoute = function(routeData) {
        mockRouteService.addRoute(routeData).then(function(success) {
            $scope.$emit(appConstantService.events.mockedRoutesChanged, success.data);
                resetForm();
        });
    };

    $scope.modifyRoute = function(routeData) {
        mockRouteService.modifyRoute(routeData).then(function(success) {
            $scope.$emit(appConstantService.events.mockedRoutesChanged, success.data);
                resetForm();
        });
    };

    $scope.deleteRoute = function(routeID) {
        mockRouteService.deleteRoute(routeID).then(function(success) {
            $scope.$emit(appConstantService.events.mockedRoutesChanged, success.data);
            resetForm();
        });
    };

    $scope.saveRoute = function() {
        if($scope.route.mockData) {
            $scope.route.mockData = JSON.parse($scope.route.mockData);
        }
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

    function resetForm() {
        $scope.route = {mockType: 'mocked', overrideGlobalSetting: false};

        $scope.form.mockNewRouteForm.url.$setValidity("required", true);
        if($scope.form.mockNewRouteForm.mockData) {
            $scope.form.mockNewRouteForm.mockData.$setValidity("required", true);
            $scope.form.mockNewRouteForm.mockData.$setValidity("pattern", true);
        }
        $scope.form.mockNewRouteForm.$setPristine();
        $scope.form.mockNewRouteForm.$setUntouched();
    }

}]);