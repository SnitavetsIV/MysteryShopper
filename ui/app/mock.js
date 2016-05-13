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
          userType: 'Shopper'
        },
        {
          id: 3,
          username: 'CoMa',
          password: 'CoMa',
          userType: 'Manager'
        }
      ];

      //START Guest module

      $httpBackend.whenPOST('/api/auth').respond(function (method, url, data, headers) {
        data = JSON.parse(data);
        if (!data.username || !data.password) {
          return [404];
        }
        for (var i = 0; i < userData.length; i++) {
          var user = userData[i];
          if (user.username === data.username &&
            user.password === data.password) {
            return [200, {userType: user.userType, token: 'blablabla' + user.username}];
          }
        }
        return [404];
      });

      $httpBackend.whenGET('/api/auth').respond(function (method, url, data, headers) {
        data = JSON.parse(data);
        if (!data.token) {
          return [404];
        } else {
          //need to check is token exist in db
          if (data.token.startsWith("blablabla")) {
            return [202];
          }
        }
        return [404];
      });

      $httpBackend.whenPOST('/api/user').respond(function (method, url, data, headers) {
        data = JSON.parse(data);
        if (data.username && data.password && data.userType) {
          var nextId = 0;
          for (var i = 0; i < userData.length; i++) {
            if (userData[i].username == data.username) {
              return [409, {message: 'Username already exist'}];
            }
            if (userData[i].id > nextId) {
              nextId = userData[i].id;
            }
          }
          if (data.userType != 'shopper' && data.userType != 'manager') {
            return [403];
          }
          nextId++;
          userData.push({
            id: nextId,
            username: data.username,
            password: data.password,
            userType: data.userType
          });
          return [200];
        } else {
          return [404];
        }

      });

      //END Guest module

      $httpBackend.whenGET(/\.html/).passThrough();


    });


  appModule.requires.push('app-mock');
}(angular.module('app')));