'use strict';
(() => {
    var app = angular.module('cdbApp');

    app.service('SearchService', function ($q) {

        var service = this;

        //faq is defined in js/mock-faq.js 
        //its only purpose is mock the data
        service.questions = faq;

        service.filterByTags = (tags) => {
            var deffered = $q.defer()

            try {
                var filteredQuestions = tags.map((tag) => {
                    return service._filterByUniqueTag(tag);
                }).reduce((prev, actual) => {
                    return prev.concat(actual);
                });

                deffered.resolve(filteredQuestions);
            } catch (error) {
                deffered.reject(error);

            } finally {
                return deffered;
            }


        };

        service._filterByUniqueTag = (unique) => {
            var copyQuestions = angular.copy(faq);
            var deffered = $q.defer();

            var filtered = copyQuestions.filter((question) => {
                return _containsTag(question.tags, unique)
            })

            if(filtered.length > 0){
                deffered.resolve(filtered);
            }else {
                deffered.reject(filtered);
            }

            return deffered.promise;
        };



        var _containsTag = (tags, unique) => {
            var out = false;
            tags.map((tag) => {
                if (tag.indexOf(unique) !== -1) out = true;
            })
            return out;
        }


    });
})();