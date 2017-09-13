'use strict';
(function () {
    var app = angular.module('cdbApp');

    app.controller("FAQController", function FAQController($state) {

        var faqCtrl = this;

        faqCtrl.questionTest = {'title': "Pergunta Sobre Algo Juridico",
                                'author': "Zeca Urubu",
                                'answer': "asuhaiusdasudhasiuda sdiaus dashdasiudh asod asjdh asjdh a shdja"};
        console.log(faqCtrl.questionTest);

    });
})();