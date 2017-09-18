'use strict';
(() => {
    var app = angular.module('cdbApp');


    function QuestionListController($timeout) {
        var questionListCtrl = this;


        questionListCtrl.goToQuestion = (question) => {
            //$state.go(STATE_LEI, {id: question.id });
            console.log(question);
        };

        questionListCtrl.$onInit = () => {
            questionListCtrl.processing = true; 
            $timeout(()=>{
                questionListCtrl.processing = false;
            }, 2000);
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


