(function (module) {

  var loginController = function ($scope) {
    $scope.getBodyClass = function () {
      return ['hold-transition', 'login-page'];
    };
  };

  module.controller("loginController", loginController);

}(angular.module("app")));
