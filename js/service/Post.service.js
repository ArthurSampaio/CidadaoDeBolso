'use strict';
(() => {
    var app = angular.module('cdbApp');

    app.service('PostService', function ($q) {

        var service = this;
        service.database = firebase.database(); 

        service.loadQuestions = () => {
            service.questionsRef = service.database.ref('questions');
        };

    });
})();