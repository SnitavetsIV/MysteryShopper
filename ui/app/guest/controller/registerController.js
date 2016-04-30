(function (guestModule) {

  var registerController = function ($scope, $state, AuthService) {

    $scope.user = {
      username: "",
      password: "",
      type: "shopper"
    };

    $scope.register = function () {
      $scope.message = "";
      AuthService.Register($scope.user.username, $scope.user.password, $scope.user.type, function (resp) {
        if (resp.success) {
          alert("Success");
          $state.go('guest.signin');
        } else {
          $scope.message = resp.message;
        }
      });

    }
  };

  guestModule.controller("registerController", registerController);

}(angular.module("app.guest")));
