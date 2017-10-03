'use strict';
(() => {
    var app = angular.module('cdbApp');

    app.service('PostService', function ($q, QuestionFactory) {

        var service = this;
        service.database = firebase.database();

        service.loadQuestions = () => {
            service.questionsRef = service.database.ref('questions');
            service.questionsRef.off();
            var deffered = $q.defer(); 
            service.questionsRef.once('value').then(
                function success(snapshoot){
                    deffered.resolve(QuestionFactory.createArrayOfQuestion(snapshoot.val()));
                }, function error(response){
                    deffered.reject(response);
                }
            );
            return deffered.promise;
        };

        service.getQuestionById = (id) => {
            service.questionsRef = service.database.ref('questions/' + id);
            service.questionsRef.off();
            var deffered = $q.defer(); 
            service.questionsRef.once('value').then(
                function success(questionSnapshoot) {
                        console.log(questionSnapshoot.val());
                    deffered.resolve(questionSnapshoot.val());
                }, function error (response) {
                    deffered.reject(response);
                }
            );
            return deffered.promise;

        };


    });
})();