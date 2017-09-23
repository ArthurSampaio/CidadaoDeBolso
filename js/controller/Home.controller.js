'use strict';
(function () {
    var app = angular.module('cdbApp');

    app.controller("HomeController", function HomeController($state) {

        var homeCtrl = this;

        homeCtrl.test = "TESTE DO CONTROLLER";

    });
})();