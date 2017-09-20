'use strict';
(function () {
    var app = angular.module('cdbApp');

    app.controller("MainController", function MainController($state) {

        var mainCtrl = this;

        mainCtrl.search = function search() {
            console.log("click in search");
        };

        mainCtrl.goToMain = () => {
            $state.go("cidadao-de-bolso.home");
        };

    });
})();