angular.module("app").factory("proxyServerSettingService", ["$http", function($http) {
    var settingFactory = {};

    settingFactory.setGlobalSetting = function(setting) {
        return $http.post("/proxy-setting/global", setting);
    };

    settingFactory.getGlobalSetting = function() {
        return $http.get("/proxy-setting/global");
    };

    return settingFactory;
}]);