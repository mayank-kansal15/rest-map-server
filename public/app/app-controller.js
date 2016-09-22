angular.module("app").controller("appController", 
["$scope", "mockRouteService","$mdDialog", "appConstantService",  function($scope, mockRouteService, $mdDialog, appConstantService) {
    $scope.routes = [];

    function getRoutes() {
        mockRouteService.getRoutes().then(function(success) {
            console.log(success);
            $scope.routes = success.data;
        });
    }
    getRoutes();

    $scope.$on(appConstantService.events.mockedRoutesChanged, function(event, routes) {
        $scope.routes = routes;
    });

    $scope.addNewRoute = function() {
        $scope.$broadcast("selected-route-changed", {mockType: 'mocked', overrideGlobalSetting: false});
    };

    $scope.loadRoute = function(routeData) {
        $scope.$broadcast("selected-route-changed", routeData);
    };

    $scope.openDialog = function($event) {
        $mdDialog.show({
            targetEvent: $event,
            templateUrl: "./proxy-server-setting/proxy-server-setting.html",
            controller: "proxyServerDialogCtrl",
        });
    };
}]);