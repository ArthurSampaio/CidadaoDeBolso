'use strict';
(() => {
    var app = angular.module('cdbApp');

    app.factory('QuestionFactory', function ($q) {

        var factory = this;
        
        factory.createArrayOfQuestion = (questionsJSON) => {
            var outQuestions = [];
            for(i in questionsJSON){
                var helpQuestion = questionsJSON[i];
                hepQuestion.id = i; 
                
            }

        };

    });
})();