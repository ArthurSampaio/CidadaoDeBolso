'use strict';
(function () {
    var app = angular.module('cdbApp');

    app.controller("MainController", function MainController($state) {

        var mainCtrl = this;

        mainCtrl.goTo = function goTo(state) {
            $state.go(state);
        };

        mainCtrl.search = function search(){
            console.log("click in search");
        };

    });
})();