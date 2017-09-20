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
                views: {
                    main: {
                        templateUrl: "view/main.html",
                        controller: 'MainController as mainCtrl'
                    }
                }

            })
            .state("cidadao-de-bolso.home", {
                url: '/home',
                views: {
                    content: {
                        templateUrl: 'view/home.html',
                        controller: 'HomeController as homeCtrl'
                    }
                }
            })

            .state("cidadao-de-bolso.busca", {
                url: '/busca/:tag',
                views: {
                    content: {
                        templateUrl: 'view/faq.html',
                        controller: 'FAQController as faqCtrl'
                    }
                },
                resolve: {
                    tag: ($stateParams) => {
                        return $stateParams.tag;
                    }
                }
            })

            .state("cidadao-de-bolso.questao-detalhada", {
                url: '/questao/:id',
                views: {
                    content: {
                        templateUrl: 'view/questao.html', 
                        controller: 'QuestionController as questionCtrl'
                    }
                }, 
                resolve: {
                    questao: (($stateParams, SearchService) => {
                        return SearchService.getById($stateParams.id).then(
                            function success(response){
                                return response; 
                            }
                        )
                    })
                }
            });



    });

    app.run(['$rootScope', '$state', function ($rootScope, $state) {


        $state.defaultErrorHandler(function (error) {
            console.log(error);
        });
    }]);



})();