'use strict';
(() => {
    var app = angular.module('cdbApp');


    function TextReaderController() {
        var textReaderCtrl = this;
    }



    app.component('textReader', {
        templateUrl: 'js/component/text-reader/text-reader.component.html',
        controller: TextReaderController,
        controllerAs: 'textReaderCtrl',
        bindings: {
            text: '<',
        }
    });

})();


