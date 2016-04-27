(function (guestModule) {

  var loginController = function ($scope, AuthService) {

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
          //redirect on page due to url param or userType
          alert("Success");
        } else {
          $scope.message = resp.message;
        }
      });
    }
  };

  guestModule.controller("loginController", loginController);

}(angular.module("app.guest")));
