angular.module("app").controller("appController", 
["$scope", "mockRouteService","$mdDialog", "appConstantService",  function($scope, mockRouteService, $mdDialog, appConstantService) {
    $scope.routes = [];

    function getRoutes() {
        mockRouteService.getRoutes().then(function(success) {
            $scope.routes = success.data;
            $scope.routes.forEach(function(route) {
                route.mockData = JSON.stringify(route.mockData, null, " ");
            });
        });
    }
    getRoutes();

    $scope.$on(appConstantService.events.mockedRoutesChanged, function(event, routes) {
        $scope.routes = routes;
    });

    $scope.addNewRoute = function() {
        $scope.$broadcast(appConstantService.events.selectedRouteChanged, {mockType: 'mocked', overrideGlobalSetting: false});
    };

    $scope.loadRoute = function(routeData) {
        $scope.$broadcast(appConstantService.events.selectedRouteChanged, routeData);
    };

    $scope.openDialog = function($event) {
        $mdDialog.show({
            targetEvent: $event,
            templateUrl: "./proxy-server-setting/proxy-server-setting.html",
            controller: "proxyServerDialogCtrl",
        });
    };
}]);