'use strict';
(() => {
    var app = angular.module('cdbApp');

    app.service('PostService', function ($q) {

        var service = this;
        service.database = firebase.database(); 
        console.log(service.database)

        service.loadQuestions = () => {
            service.questionsRef = service.database.ref('questions');
            service.questionsRef.off();
            var deffered = $q.defer(); 
            service.questionsRef.once('value').then(
                function success(snapshoot){
                    console.log(snapshoot.val());
                    deffered.resolve(snapshoot.val());
                }, function error(response){
                    deffered.reject(response);
                }
            );
            return deffered.promise;
        };

        

    });
})();