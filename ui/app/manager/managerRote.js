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
    }).state("manager.venue", {
      url: "/venue",
      views: {
        'topmenu': {
          templateUrl: "manager/template/topMenu.html",
          controller: "ManagerTopMenuController"
        },
        'content': {
          templateUrl: "manager/template/venue.html",
          controller: "ManagerVenueController"
        },
        'sidemenu': {
          templateUrl: "manager/template/menu.html",
          controller: "ManagerMenuController"
        }
      }
    }).state("manager.checklist", {
      url: "/checklist",
      views: {
        'topmenu': {
          templateUrl: "manager/template/topMenu.html",
          controller: "ManagerTopMenuController"
        },
        'content': {
          templateUrl: "manager/template/checklist.html",
          controller: "ManagerChecklistController"
        },
        'sidemenu': {
          templateUrl: "manager/template/menu.html",
          controller: "ManagerMenuController"
        }
      }
    }).state("manager.review", {
      url: "/review",
      views: {
        'topmenu': {
          templateUrl: "manager/template/topMenu.html",
          controller: "ManagerTopMenuController"
        },
        'content': {
          templateUrl: "manager/template/review.html",
          controller: "ManagerReviewController"
        },
        'sidemenu': {
          templateUrl: "manager/template/menu.html",
          controller: "ManagerMenuController"
        }
      }
    });
  }]);

})(angular.module("app.manager"));
