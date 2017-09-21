'use strict';
(() => {
    var app = angular.module('cdbApp');


    function UserGravatarController() {
        var userGravatarCtrl = this;
    }



    app.component('userGravatar', {
        templateUrl: 'js/component/user-gravatar/user-gravatar.component.html',
        controller: UserGravatarController,
        controllerAs: 'userGravatarCtrl',
        bindings: {
            author: '<',
            type: '<'
        }
    });

})();


