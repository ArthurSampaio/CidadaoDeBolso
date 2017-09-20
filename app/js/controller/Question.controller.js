'use strict';
(function () {
    var app = angular.module('cdbApp');

    app.controller("QuestionController", function QuestionController($state, questao) {

        var questionCtrl = this;
        const UNLIKE = "./img/icons/unlike.svg";
        const LIKE = "./img/icons/like.svg";
        questionCtrl.question = angular.copy(questao);
        questionCtrl.isLikedQuestion = false; 

        questionCtrl.getStatus = () => {
            if (questionCtrl.isLikedQuestion) {
                return LIKE;
            } else {
                return UNLIKE;
            }
        };

        questionCtrl.changeStatusLike = () => {
            console.log('entrou')
            if (questionCtrl.isLikedQuestion) {
                questionCtrl.question.likes--;
                questionCtrl.isLikedQuestion = !questionCtrl.isLikedQuestion;

            }else {
                questionCtrl.question.likes++;
                questionCtrl.isLikedQuestion = !questionCtrl.isLikedQuestion;
            }
            //fazer put em questão 
            //fazer post em usuario
        }


    });
})();