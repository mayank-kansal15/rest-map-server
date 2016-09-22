angular.module("app").factory("appConstantService", function() {
    var constants = {};
    constants.events = {};
    constants.events.mockedRoutesChanged = "mocked-route-changed";
    constants.events.selectedRouteChanged = "selected-route-changed";

    return constants;
});