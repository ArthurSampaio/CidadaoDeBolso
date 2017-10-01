'use strict';
(() => {
    var app = angular.module('cdbApp');

    app.service('VizService', function ($q, PostService) {

        var service = this;

        /**
         * {
         *   id, type, count
         * }
         */

        service.getTags = () => {

            var deffered = $q.defer();
            PostService.loadQuestions().then(
                function success(questionsJSON) {
                    var popularTags = mostPopularTags(questionsJSON);
                    deffered.resolve(popularTags);
                }, function exception(erro) {
                    deffered.reject(erro);
                });
            return deffered.promise;
        };

        function mostPopularTags(questionsJSON) {
            var tags = concatenateAndCleanInvalidTags(questionsJSON);
            var frequencyDict = frequencyOfTags(tags);
            var listOfTags = []
            var count = 0; 
            for (var i in frequencyDict){
                listOfTags[count] = {
                    'id':count, 
                    'name': i,
                    'count':frequencyDict[i]
                };
                count++;
            }
            return listOfTags.sort((a,b)=> {
                return b.count - a.count;
            });
        }

        function compareCounts(a,b) {
            return 
        }

        function frequencyOfTags(listOfTags) {

            var uniques = {}
            for (var i = 0; i < listOfTags.length; i++) {
                uniques[listOfTags[i]] = 1 + (uniques[listOfTags[i]] || 0);
            }
            return uniques
        }

        function concatenateAndCleanInvalidTags(questionsJSON) {
            var tags = questionsJSON.reduce((acc, val) => {
                return acc.concat(val.tags);
            }, []);

            return tags.map(tag => tag = tag.trim()).filter((val) => {
                return val !== "";
            });
        };
    });
})();