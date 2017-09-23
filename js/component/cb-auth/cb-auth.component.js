'use strict';
(() => {
    var app = angular.module('cdbApp');


    function UserAuthController($mdMenu) {
        var authCtrl = this;


        authCtrl.$onInit = () => {
            console.log(authCtrl.logado);
        };

        authCtrl.login = () => {
            authCtrl.signIn({}).then(
                function success(data) {
                    console.log(data);
                }, function error(data) {
                    console.log(data)
                }
            )
        };

        authCtrl.logout = () => {
            authCtrl.signOut({});

        };

   
        authCtrl.$onChanges = (obj) => {
            if (obj.user) {
                console.log("alterou")
                console.log(obj.user)
                if (obj.user.currentValue !== undefined) {
                    
                    authCtrl.user = obj.user.currentValue;
                    console.log(authCtrl.user)
                    authCtrl.logado = true;
                } else {
                    authCtrl.logado = false;
                }
            }
        };

    }



    app.component('cbAuth', {
        templateUrl: 'js/component/cb-auth/cb-auth.component.html',
        controller: UserAuthController,
        controllerAs: 'authCtrl',
        bindings: {
            user: '<',
            signIn: '&',
            signOut: '&',

        }
    });

})();


