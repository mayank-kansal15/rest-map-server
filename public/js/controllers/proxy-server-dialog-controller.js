angular.module("app").controller("proxyServerDialogCtrl", 
["$scope", "$mdDialog", "proxyServerSettingService", function($scope, $mdDialog, proxyServerSettingService) {
    $scope.proxy = {};

    function getSettings() {
        proxyServerSettingService.getGlobalSetting().then(function(success) {
            $scope.proxy = success.data;
        });
    }
    getSettings();

    $scope.saveSettings = function() {
        proxyServerSettingService.setGlobalSetting($scope.proxy).then(function(success) {
            console.log("setting saved success");
            closeDialog();
        }, function(error) {
            closeDialog();
        });
    };

    $scope.cancelDialog = function() {
        closeDialog();
    };

    function closeDialog() {
        $mdDialog.hide();
    }
}]);