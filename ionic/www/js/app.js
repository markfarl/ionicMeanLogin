angular.module('starter', ['ionic', 'satellizer', 'starter.controllers'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })
      .state('app.home', {
        url: '/',
        views: {
          'menuContent': {
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl'
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  })
  .config(function($authProvider) {
    var commonConfig = {
      popupOptions: {
        location: 'no',
        toolbar: 'no',
        width: window.screen.width,
        height: window.screen.height
      }
    };

    if (ionic.Platform.isIOS() || ionic.Platform.isAndroid()) {
      $authProvider.cordova = true;
      commonConfig.redirectUri = 'http://localhost:8100/';
    }

    $authProvider.facebook(angular.extend({}, commonConfig, {
      clientId: '1735604586658568',
      url: 'http://localhost:80/auth/facebook'
    }));

    $authProvider.twitter(angular.extend({}, commonConfig, {
      url: 'http://46.22.136.60:80/auth/twitter'
    }));

    $authProvider.google(angular.extend({}, commonConfig, {
      clientId: '631036554609-v5hm2amv4pvico3asfi97f54sc51ji4o.apps.googleusercontent.com',
      url: 'http://46.22.136.60:80/auth/google'
    }));
  })
  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  });
