(function (module) {
  "use strict";

  module.config(function ($routeProvider) {
    $routeProvider
        .when('/register', {
          templateUrl: 'components/guest/templates/register.html',
          controller: 'registerController'
        })
        .when('/login', {
          templateUrl: 'components/guest/templates/login.html',
          controller: 'loginController'
        })
        .when('/', {
          templateUrl: 'components/guest/templates/login.html',
          controller: 'loginController'
        });
  });

})(angular.module("app"));