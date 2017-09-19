'use strict';
(function () {
    var app = angular.module('cdbApp');

    app.controller("FAQController", function FAQController($state, tag, SearchService) {

        var faqCtrl = this;
        faqCtrl.tag = tag; 
       
        
        SearchService._filterByUniqueTag(faqCtrl.tag).then(
            function success(response){
                faqCtrl.questions =  response; 
            }, function error (response){
                faqCtrl.questions =  response;
            }

        );      

    });
})();