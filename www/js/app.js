// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module( 'starter', [ 'ionic', 'starter.controllers', 'starter.constants' ] )

.run( function ( $ionicPlatform, $rootScope ) {
  $ionicPlatform.ready( function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if ( window.cordova && window.cordova.plugins.Keyboard ) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar( true );
    }
    if ( window.StatusBar ) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  } );
  $rootScope.$on( '$stateChangeStart', function ( event, toState, toParams, fromState, fromParams ) {
    console.log( '$stateChangeStart to ' + toState.to + '- fired when the transition begins. toState,toParams : \n', toState, toParams );
  } );
  $rootScope.$on( '$stateChangeError', function ( event, toState, toParams, fromState, fromParams, error ) {
    console.log( '$stateChangeError - fired when an error occurs during transition.' );
    console.log( arguments );
  } );
  $rootScope.$on( '$stateChangeSuccess', function ( event, toState, toParams, fromState, fromParams ) {
    console.log( '$stateChangeSuccess to ' + toState.name + '- fired once the state transition is complete.' );
  } );
  // $rootScope.$on('$viewContentLoading',function(event, viewConfig){
  //   // runs on individual scopes, so putting it in "run" doesn't work.
  //   console.log('$viewContentLoading - view begins loading - dom not rendered',viewConfig);
  // });
  $rootScope.$on( '$viewContentLoaded', function ( event ) {
    console.log( '$viewContentLoaded - fired after dom rendered', event );
  } );
  $rootScope.$on( '$stateNotFound', function ( event, unfoundState, fromState, fromParams ) {
    console.log( '$stateNotFound ' + unfoundState.to + '  - fired when a state cannot be found by its name.' );
    console.log( unfoundState, fromState, fromParams );
  } );
} )

.config( function ( $stateProvider, $urlRouterProvider ) {
  $stateProvider

    .state( 'app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  } )

  .state( 'app.help', {
      url: "/help",
      views: {
        'menuContent': {
          templateUrl: "templates/help.html"
        }
      }
    } )

    .state( 'app.reports', {
      url: "/reports",
      views: {
        'menuContent': {
          templateUrl: "templates/reports.html",
          controller: 'ReportsCtrl'
        }
      }
    } )

  .state( 'app.report', {
    url: "/reports/:reportId",
    views: {
      'menuContent': {
        templateUrl: "templates/reports.detail.html",
        controller: 'ReportDetailCtrl'
      }
    }
  } )

  .state( 'app.report.categories', {
    url: "/categories",
    views: {
      'reportContent': {
        templateUrl: "templates/reports.detail.categories.html",
        controller: 'ReportDetailCategoriesCtrl'
      }
    }
  } )
  .state( 'app.report.flight', {
    url: "/flight",
    views: {
      'reportContent': {
        templateUrl: "templates/reports.detail.flight.html",
        controller: 'ReportDetailFlightCtrl'
      }
    }
  } )
  .state( 'app.report.temp', {
    url: "/temp",
    views: {
      'reportContent': {
        templateUrl: "templates/temp.html"
      }
    }
  } );
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise( '/app/reports' );
} );
