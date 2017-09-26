'use strict';
(() => {
    var app = angular.module('cdbApp');

    app.service('HelperService', function ($q) {

        var service = this;

        service.questionTreeJsonToQuestionArrayJson = (questionTree) => {
            var questionArray =[];
            for (var i in questionTree){
                var question = questionTree[i];
                question.id = i;
                question = new Question(question);
                questionArray.push(question);
            }
            return questionArray;
        }


    });
})();