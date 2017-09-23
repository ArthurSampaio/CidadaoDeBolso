'use strict';
(() => {
    var app = angular.module('cdbApp');

    app.service('AuthService', function ($q) {

        var service = this;
        service.auth = firebase.auth(); 
        service.user; 

        //service.auth.onAuthStateChanged(service.onAuthStateChanged.bind(service));

        service.signIn = () => {
            var deffered = $q.defer(); 
            var provider = new firebase.auth.GoogleAuthProvider(); 
            service.auth.signInWithPopup(provider).then(
                function success(response){
                    console.log(response);
                    service.user = response.user; 
                    deffered.resolve(response.user);
                }, function(erro) {
                    deffered.reject(erro);
                }
            );
            return deffered.promise;
        };

        service.signOut = () => {
            service.auth.signOut(); 
        };


    });
})();