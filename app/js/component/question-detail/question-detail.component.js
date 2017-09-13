'use strict';
(function () {
    var app = angular.module('cdbApp');


    function QuestionDetailController() {
        var questionDetailCtrl = this;
        console.log(questionDetailCtrl.question)
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


