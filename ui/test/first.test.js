describe('AuthService', function () {

  var $httpBackend,
    authService;

  beforeEach(module('app.shared'));

  beforeEach(inject(function ($injector) {
    $httpBackend = $injector.get('$httpBackend');
    authService = $injector.get('AuthService');
    
  }));

  it('True = True', function () {
    expect(true).toBe(false);
  })

});
