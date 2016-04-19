(function (guestModule) {
  "use strict";

  guestModule.config(["$stateProvider", function ($stateProvider) {

    $stateProvider.state("guest", {
      url: "/g",
      template: "<div ui-view></div>",
      abstract: true
    }).state("guest.signin", {
      url: "/signin",
      templateUrl: "guest/template/signin.html",
      controller: "loginController",
      data: {
        cssClassnames: "hold-transition login-page"
      }
    }).state("guest.register", {
      url: "/register",
      templateUrl: "guest/template/register.html",
      controller: "registerController",
      data: {
        cssClassnames: "hold-transition register-page"
      }
    });
  }]);

})(angular.module("app.guest"));
