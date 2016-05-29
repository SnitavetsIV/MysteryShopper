(function (managerModule) {

  managerModule.controller("ManagerVenuesController", function ($scope) {
    $scope.venues = [
      {
        id: 1,
        name: 'Office1',
        address: 'NY st.Ovol h 5'
      },
      {
        id: 2,
        name: 'Office2',
        address: 'NY st.Ovol h 6'
      },
      {
        id: 3,
        name: 'Office3',
        address: 'NY st.Ovol h 7'
      },
      {
        id: 4,
        name: 'Office4',
        address: 'NY st.Ovol h 8'
      }
    ];
  });

}(angular.module('app.manager')));
