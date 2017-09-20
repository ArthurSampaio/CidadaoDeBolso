'use strict';
(() => {
    var app = angular.module('cdbApp');


    function LikeQuestionController() {
        var likeQuestionCtrl = this;

        likeQuestionCtrl.getStatusLike = () => {
           return likeQuestionCtrl.getStatus({});
        };

        likeQuestionCtrl.changeStatusLike = () => {
            return likeQuestionCtrl.changeStatus({}); 
        }
    }



    app.component('likeQuestion', {
        templateUrl: 'js/component/like-question/like-question.component.html',
        controller: LikeQuestionController,
        controllerAs: 'likeQuestionCtrl',
        bindings: {
            question: '<', 
            changeStatus: '&', 
            getStatus: '&'
        }
    });

})();


