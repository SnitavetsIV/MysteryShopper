(function (appModule) {

  appModule.config(["$stateProvider", "$urlRouterProvider", "$locationProvider",
    function ($stateProvider, $urlRouterProvider, $locationProvider) {

      $urlRouterProvider.otherwise("/g/signin");

      $locationProvider.html5Mode(false);
    }]);

}(angular.module("app")));