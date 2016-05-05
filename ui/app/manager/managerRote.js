(function (managerModule) {
  "use strict";

  managerModule.config(["$stateProvider", function ($stateProvider) {

    $stateProvider.state("manager", {
      url: "/m",
      templateUrl: "shared/template/main.tmpl.html",
      data: {
        cssClassnames: "sidebar-mini skin-green-light"
      },
      abstract: true
    }).state("manager.home", {
      url: "/home",
      views: {
        'topmenu': {
          templateUrl: "manager/template/topMenu.html",
          controller: "ManagerTopMenuController"
        },
        'content': {
          templateUrl: "manager/template/home.html",
          controller: "ManagerHomeController"
        },
        'sidemenu': {
          templateUrl: "manager/template/menu.html",
          controller: "ManagerMenuController"
        }
      }
    });
  }]);

})(angular.module("app.manager"));
