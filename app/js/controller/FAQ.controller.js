'use strict';
(function () {
    var app = angular.module('cdbApp');

    app.controller("FAQController", function FAQController($state, tag) {

        var faqCtrl = this;
        faqCtrl.tag = tag; 

        //faq is defined in js/mock-faq.js 
        //its only purpose is mock the data
        faqCtrl.questions = faq;      

    });
})();