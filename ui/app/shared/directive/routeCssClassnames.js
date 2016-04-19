(function (sharedModule) {
  'use strict';

  sharedModule.directive('routeCssClassnames', routeCssClassnames);

  function routeCssClassnames() {
    return {
      restrict: 'A',
      scope: {},
      link: function (scope, elem) {

        scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState) {
          var fromClassnames = angular.isDefined(fromState.data) && angular.isDefined(fromState.data.cssClassnames) ? fromState.data.cssClassnames : null;
          var toClassnames = angular.isDefined(toState.data) && angular.isDefined(toState.data.cssClassnames) ? toState.data.cssClassnames : null;

          if (fromClassnames != toClassnames) {
            if (fromClassnames) {
              elem.removeClass(fromClassnames);
            }

            if (toClassnames) {
              elem.addClass(toClassnames);
            }
          }
        });
      }
    }
  }
}(angular.module("app.shared")));
