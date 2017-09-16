'use strict';
(() => {
    var app = angular.module('cdbApp');


    function QuestionDetailController() {
        var questionDetailCtrl = this;
        console.log(questionDetailCtrl.question)
        const STATE_LEI = "lei";

        questionDetailCtrl.goToQuestion = () => {
            //$state.go(STATE_LEI, {id: question.id });
            console.log(questionDetailCtrl.question);
        };

    }



    app.component('questionDetail', {
        templateUrl: 'js/component/question-detail/question-detail.component.html',
        controller: QuestionDetailController,
        controllerAs: 'questionDetailCtrl',
        bindings: {
            question: '<'
        }
    });

})();


