'use strict';
(() => {
    var app = angular.module('cdbApp');


    function QuestionListController() {
        var questionListCtrl = this;


        questionListCtrl.goToQuestion = (question) => {
            //$state.go(STATE_LEI, {id: question.id });
            console.log(question);
        };

    }



    app.component('questionList', {
        templateUrl: 'js/component/question-list/question-list.component.html',
        controller: QuestionListController,
        controllerAs: 'questionListCtrl',
        bindings: {
            questions: '<',
            tag: '<'
        }
    });

})();


