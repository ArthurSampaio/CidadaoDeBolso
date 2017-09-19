'use strict';
(function () {
    var app = angular.module('cdbApp');

    app.controller("MainController", function MainController($state) {

        var mainCtrl = this;

        mainCtrl.goTo = function goTo(state) {
            $state.go(state);
        };

        mainCtrl.search = function search() {
            console.log("click in search");
        };

        mainCtrl.goToMain = () => {
            $state.go("cidadao-de-bolso.home");
        };


        mainCtrl.isOpen = false;

        mainCtrl.demo = {
            isOpen: false,
            count: 0,
            selectedDirection: 'left'
        };
    });
})();