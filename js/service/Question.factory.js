'use strict';
(() => {
    var app = angular.module('cdbApp');

    app.factory('QuestionFactory', function ($q, HelperService) {


        function _createArrayOfQuestion(questionsJSON) {
            var outQuestions = HelperService.questionTreeJsonToQuestionArrayJson(questionsJSON);
            return outQuestions;
        };

        return {
            createArrayOfQuestion: _createArrayOfQuestion
        }

    });
})();