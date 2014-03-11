// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'firebase'])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('login', {
      url: "/",
      templateUrl: "templates/login.html",
      controller: 'LoginCtrl'
    })

    .state('signup', {
      url: '/signup',
      templateUrl: 'templates/signup.html',
      controller: 'SignupCtrl'
    })

    // the pet tab has its own child nav-view and history
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'HomeCtrl'
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

})

.controller('LoginCtrl', function($scope, $firebaseSimpleLogin) {
  $scope.loginData = {};

  var dataRef = new Firebase("https://ionic-firebase-login.firebaseio.com/");
  $scope.loginObj = $firebaseSimpleLogin(dataRef);

  $scope.tryLogin = function() {
    console.log('Logging in', $scope.loginData);
    $scope.loginObj.$login('facebook').then(function(user) {
      console.log('Logged in!', user);
    }, function(error) {
      console.error('Unable to login', error);
    });
  };
})

.controller('HomeCtrl', function($scope) {
});
