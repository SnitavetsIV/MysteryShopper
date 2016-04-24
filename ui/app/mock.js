(function (appModule) {
  angular.module('app-mock', ['ngMockE2E'])
    .run(function ($httpBackend) {

      //LOCAL STORAGE

      var userData = [
        {
          id: 1,
          username: 'Admin',
          password: 'Admin',
          userType: 'Admin'
        },
        {
          id: 2,
          username: 'MySh',
          password: 'MySh',
          userType: 'MysteryShopper'
        },
        {
          id: 3,
          username: 'CoMa',
          password: 'CoMa',
          userType: 'CompanyManager'
        }
      ];

      //START Guest module

      $httpBackend.whenPOST('/api/authenticate').respond(function (method, url, data, headers) {
        data = JSON.parse(data);
        for (var i = 0; i < userData.length; i++) {
          var user = userData[i];
          if (user.username === data.username &&
            user.password === data.password) {
            return [200, {userType: user.userType}];
          }
        }
        return [404, {message: 'Invalid username or password'}];
      });

      $httpBackend.whenPOST('/api/user').respond(function (method, url, data, headers) {
        data = JSON.parse(data);
        if (data.username && data.password && data.userType) {
          //check username exist

        }

      });

      //END Guest module

      $httpBackend.whenGET(/\.html/).passThrough();

    });


  appModule.requires.push('app-mock');
}(angular.module('app')));