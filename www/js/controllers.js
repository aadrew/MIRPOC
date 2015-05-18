angular.module('starter.controllers', ['ngLodash'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.constant('reports', [
  { title: 'Employee injured', id: 1 },
  { title: 'Damaged wheelchair', id: 2 },
  { title: 'Fluids spilled', id: 3 },
  { title: 'Fumes reported', id: 4 },
  { title: 'Passenger slipped', id: 5 },
  { title: 'Extended delay', id: 6 }
])

.controller('ReportsCtrl', function($scope, reports) {
  $scope.reports = reports;
})

.controller('ReportDetailCtrl', function($scope, $stateParams, reports, lodash) {
  $scope.report = lodash.findWhere(reports, { id: lodash.parseInt($stateParams.reportId)})
})

.controller('ReportDetailCategoriesCtrl', function($scope) {
});
