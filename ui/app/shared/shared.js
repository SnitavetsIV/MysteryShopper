(function () {

  var sharedModule = angular.module("app.shared", ["LocalStorageModule"]);

  sharedModule.config(function ($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
  });

}());
