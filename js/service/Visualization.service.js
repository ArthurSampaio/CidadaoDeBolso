'use strict';
(() => {
    var app = angular.module('cdbApp');

    app.service('VizService', function ($q, PostService) {

        var service = this;

        service.getTags = () => {

            PostService.loadQuestions().then(
                function success(questionsJSON) {
                    var tags = arrayOfTags(questionsJSON);

                });
        };

        function arrayOfTags(questionsJSON) {
            var tags = questionsJSON.reduce((acc, val) => {
                return acc.concat(val.tags);
            }, []);

            return tags.map(tag => tag = tag.trim()).filter((val) => {
                return val !== "";
            });
        };


    });
})();