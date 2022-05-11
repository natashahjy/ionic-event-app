angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

    .state('eventSearch', {
        url: '/eventSearch',
        templateUrl: 'templates/eventSearch.html',
        controller: 'eventSearchCtrl'
    })

    .state('schedule', {
        url: '/schedule/:country',
        templateUrl: 'templates/schedule.html',
        controller: 'scheduleCtrl'
    })

$urlRouterProvider.otherwise('/eventSearch')


});