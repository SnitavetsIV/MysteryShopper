(function () {
  "use strict";

  var appModule = angular.module("app", [
    //My modules
    "app.shared",
    "app.guest",
    "app.manager",
    //angular modules
    "ui.router",
    "LocalStorageModule"]);

  appModule.run(function ($rootScope, localStorageService, $location) {
    $rootScope.$on('$locationChangeStart', function (event, next, current) {
      var restrictedPage = $.inArray($location.path(), ['/g/signin', '/g/register']) === -1;
      if (restrictedPage && !localStorageService.get("token")) {
        $location.path('/g/signin');
      }
    });
  });

})();