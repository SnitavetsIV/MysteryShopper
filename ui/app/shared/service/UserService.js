(function (sharedModule) {

  sharedModule.factory('UserService', function ($resource) {
    var User = $resource('/api/user/:id');

    return {

      saveUser: function (user, successCallback, errorCallback) {
        return User.save(user, successCallback, errorCallback);
      }

    };
  });
  
}(angular.module("app.shared")));