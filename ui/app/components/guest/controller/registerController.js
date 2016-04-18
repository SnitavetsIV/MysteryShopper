(function (module) {

  var registerController = function ($scope) {

    $scope.getBodyClass = function () {
      return ['hold-transition', 'register-page'];
    };

    $scope.submitRegister = function () {

    }
  };

  module.controller("registerController", registerController);

}(angular.module("app")));
