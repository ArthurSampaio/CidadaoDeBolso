'use strict';
(() => {
    var app = angular.module('cdbApp');


    function QuestionListController($timeout, $state) {
        var questionListCtrl = this;
        const STATE_QUESTAO = "cidadao-de-bolso.questao-detalhada";

        questionListCtrl.goToQuestion = (question) => {
            
            $state.go(STATE_QUESTAO, {id: question.id });
           // console.log(question);
        };

        questionListCtrl.$onInit = () => {
            questionListCtrl.processing = true; 
            $timeout(()=>{
                questionListCtrl.processing = false;
            }, 200);
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


