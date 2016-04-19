(function (appModule) {

  appModule.config(["$stateProvider", "$urlRouterProvider", "$locationProvider",
    function ($stateProvider, $urlRouterProvider, $locationProvider) {

      $urlRouterProvider.otherwise("/g/signin");
    }]);

}(angular.module("app")));