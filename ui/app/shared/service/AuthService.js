(function (sharedModule) {

  sharedModule.factory('AuthService', function ($http, localStorageService, UserService, $location) {

    //check token after f5

    var token = localStorageService.get("token");
    var user = localStorageService.get("user");
    if (token && user) {
      $http.get("/api/auth").then(function successCallback(responce) {
        if (user.userType == 'Manager') {
          $location.path('/m/home');
        } else {
          alert("Success");
        }
      }, function errorCallback(responce) {
        service.ClearCredentials();
      });
    }

    var service = {};

    service.Authenticate = function (username, password, callback) {

      var ret = {};

      $http.post('/api/auth', {username: username, password: password})
          .then(function successCallback(response) {
            if (response.data && response.data.userType && response.data.token) {
              ret.userType = response.data.userType;
              localStorageService.set("token", response.data.token);
              localStorageService.set("user", {
                username: username,
                userType: ret.userType
              });
            } else {
              ret.message = "Unknown error while trying authenticate";
            }
            callback(ret);
          }, function errorCallback(response) {
            if (response.data && response.data.message) {
              ret.message = response.data.message;
            } else if (response.status == 404) {
              ret.message = "Incorrect username or password";
            } else {
              ret.message = "Unknown error while trying authenticate";
            }
            callback(ret);
          });

    };

    service.Register = function (username, password, type, callback) {

      var ret = {};

      UserService.saveUser({
        username: username,
        password: password,
        userType: type
      }, function (response) {
        ret.success = true;
        callback(ret);
      }, function (response) {
        if (response.data && response.data.message) {
          ret.message = response.data.message;
        } else if (response.status == 409) {
          ret.message = "Username already exist";
        } else {
          ret.message = "Unknown error while trying register new user";
        }
        callback(ret);
      });

    };

    service.ClearCredentials = function () {
      localStorageService.remove("token");
      localStorageService.remove("user");
    };

    return service;
  });

}(angular.module("app.shared")));