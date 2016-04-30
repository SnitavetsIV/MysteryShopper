(function () {

  var sharedModule = angular.module("app.shared", ["LocalStorageModule", "ngResource"]);

  sharedModule.config(function ($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
  });

}());
