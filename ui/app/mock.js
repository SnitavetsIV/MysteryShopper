(function (appModule) {
  angular.module('app-mock', ['ngMockE2E'])
      .run(function ($httpBackend) {

        $httpBackend.whenGET(/\.html/).passThrough();

      });


  appModule.requires.push('app-mock');
}(angular.module('app')));