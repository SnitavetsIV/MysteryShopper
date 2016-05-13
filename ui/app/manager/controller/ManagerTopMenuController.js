(function (managerModule) {

  managerModule.controller("ManagerTopMenuController", function ($scope, localStorageService, AuthService, $location) {
    $scope.user = localStorageService.get("user");
    $scope.signout = function () {
      AuthService.ClearCredentials();
      $location.path("/g/signin");
    }
  });

}(angular.module('app.manager')));
