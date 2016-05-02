(function (managerModule) {
  "use strict";

  managerModule.config(["$stateProvider", function ($stateProvider) {

    $stateProvider.state("manager", {
      url: "/m",
      template: "<div ui-view></div>",
      abstract: true
    }).state("manager.main", {
      url: "/signin",
      templateUrl: "guest/template/signin.html",
      controller: "loginController",
      data: {
        cssClassnames: "hold-transition login-page"
      }
    });
  }]);

})(angular.module("app.manager"));
