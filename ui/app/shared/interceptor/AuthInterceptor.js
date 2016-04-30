(function (sharedModule) {

  sharedModule.factory("AuthInterceptor", function ($q, localStorageService, $location) {
    return {
      request: function (config) {
        var token = localStorageService.get('token');
        if (token) {
          config.headers['Authorization'] = 'bearer ' + token;
        }
        return config;
      }
    };
  });

}(angular.module("app.shared")));
