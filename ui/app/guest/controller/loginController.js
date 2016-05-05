(function (guestModule) {

  var loginController = function ($scope, AuthService, $location) {

    (function initController() {
      // reset login status
      AuthService.ClearCredentials();
    })();

    $scope.user = {
      username: "",
      password: ""
    };

    $scope.login = function () {
      $scope.message = "";
      AuthService.Authenticate($scope.user.username, $scope.user.password, function (resp) {
        if (resp.userType) {
          if (resp.userType == 'Manager') {
            $location.path('/m/home');
          } else {
            alert("Success");
          }
        } else {
          $scope.message = resp.message;
        }
      });
    }
  };

  guestModule.controller("loginController", loginController);

}(angular.module("app.guest")));
