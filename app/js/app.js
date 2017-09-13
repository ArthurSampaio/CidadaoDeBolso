'use strict';

(function () {

    var app = angular.module("cdbApp", [
        'ngAnimate',
        'ngAria',
        'ngSanitize',
        'ngMaterial',
        'ui.router'
    ]);

    app.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');
        $locationProvider.html5Mode(false);
        $locationProvider.hashPrefix('');

        $stateProvider
            .state("cidadao-de-bolso", {
                templateUrl: "view/main.html",
                controller: 'MainController as mainCtrl'
            })
            .state("cidadao-de-bolso.home", {
                url: '/home',
                views: {
                    content: {
                        templateUrl: 'view/home.html',
                        controller: 'HomeController as homeCtrl'
                    }
                }
            });

    });

    app.run(['$rootScope', '$state', function ($rootScope, $state) {

        $state.defaultErrorHandler(function (error) {
            console.log(error);
        });
    }]);



})();