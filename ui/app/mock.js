angular.module('app-mock', ['ngMockE2E'])
    .run(function ($httpBackend) {

      $httpBackend.whenGET(/\.html/).passThrough();
      
    });


angular.module('app').requires.push('app-mock');