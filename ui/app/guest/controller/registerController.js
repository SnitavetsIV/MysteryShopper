(function (guestModule) {

  var registerController = function ($scope) {

    $scope.user = {
      username: "",
      password: "",
      type: "MysteryShopper"
    };

    $scope.register = function () {
      $scope.message = "";
      AuthService.Register($scope.user.username, $scope.user.password, $scope.user.type, function (resp) {
        if (resp.success) {
          AuthService.SetCredentials($scope.user.username, $scope.user.password, $scope.user.type);
          alert("Success");
        } else {
          $scope.message = resp.message;
        }
      });

    }
  };

  guestModule.controller("registerController", registerController);

}(angular.module("app.guest")));
