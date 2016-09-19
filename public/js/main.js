angular.module("app", ['ngMaterial']);         
angular.module("app").controller("MainController", ["$scope", function($scope) {
    $scope.helloTo = {};
    $scope.helloTo.title = "AngularJS";
}]);