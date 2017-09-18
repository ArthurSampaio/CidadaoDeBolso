'use strict';
(() => {
    var app = angular.module('cdbApp');


    function QuestionDetailController() {
        var questionDetailCtrl = this;
        const STATE_LEI = "lei";

        questionDetailCtrl.goToQuestion = (question) => {
           questionDetailCtrl.toQuestion(questionDetailCtrl.question);
        };


    }



    app.component('questionDetail', {
        templateUrl: 'js/component/question-detail/question-detail.component.html',
        controller: QuestionDetailController,
        controllerAs: 'questionDetailCtrl',
        bindings: {
            question: '<',
            toQuestion: '&'
        }
    });

})();


