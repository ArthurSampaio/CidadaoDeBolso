'use strict';
(() => {
    var app = angular.module('cdbApp');


    function UserAuthController() {
        var authCtrl = this;


    }



    app.component('userGravatar', {
        templateUrl: 'js/component/user-gravatar/user-gravatar.component.html',
        controller: UserAuthController,
        controllerAs: 'authCtrl',
        bindings: {
            user: '<',
            signIn: '&',
            signOut: '&'

        }
    });

})();


