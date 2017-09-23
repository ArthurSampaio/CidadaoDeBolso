'use strict';
(function () {
    var app = angular.module('cdbApp');

    app.controller("MainController", function MainController($state, AuthService) {

        var mainCtrl = this;


        mainCtrl.search = function search() {
            console.log("click in search");
            console.log(mainCtrl.user)

        };

        mainCtrl.goToMain = () => {
            $state.go("cidadao-de-bolso.home");
        };

        mainCtrl.login = () => {
            return AuthService.signIn().then(
                function success(response) {
                    mainCtrl.user = response;
                },
                function error(response) {
                    console.log(response);
                }
            );
        };

        mainCtrl.logout = () => {
            return AuthService.signOut().then(
                function success(response){
                    console.log(response);
                }, function error(response){
                    console.log(response)
                }
            )
        };




    });
})();