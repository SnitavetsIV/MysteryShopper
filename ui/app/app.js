(function () {
  "use strict";

  var appModule = angular.module("app", [
    //My modules
    "app.shared",
    "app.guest",
    "app.admin",
    "app.manager",
    "app.shopper",
    //angular modules
    "ui.router",
    "ngCookies"]);

  appModule.run(function ($rootScope, $location, $cookieStore, $http) {
    // keep user logged in after page refresh
    $rootScope.globals = $cookieStore.get('globals') || {};
    if ($rootScope.globals.currentUser) {
      $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
      // redirect to login page if not logged in and trying to access a restricted page
      var restrictedPage = $.inArray($location.path(), ['/g/signin', '/g/register']) === -1;
      var loggedIn = $rootScope.globals.currentUser;
      if (restrictedPage && !loggedIn) {
        $location.path('/g/signin');
      }
    });
  });

})();