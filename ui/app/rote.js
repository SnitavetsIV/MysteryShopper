(function (appModule) {

  appModule.config(["$stateProvider", "$urlRouterProvider", "$locationProvider",
    function ($stateProvider, $urlRouterProvider, $locationProvider) {

      $urlRouterProvider.otherwise("/g/signin");

      $locationProvider.html5Mode(true);
    }]);

}(angular.module("app")));