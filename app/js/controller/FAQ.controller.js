'use strict';
(function () {
    var app = angular.module('cdbApp');

    app.controller("FAQController", function FAQController($state) {

        var faqCtrl = this;

        faqCtrl.questionTest = {'title': "Pergunta Sobre Algo Juridico",
                                'author': "Zeca Urubu",
                                'answer': "asuhaiusdasudhasiuda sdiaus dashdasiudh asod asjdh asjdh a shdja,asuhaiusdasudhasiuda sdiaus dashdasiudh asod asjdh asjdh a shdjaasuhaiusdasudhasiuda sdiaus dashdasiudh asod asjdh asjdh a shdja",
                                'likes': 52, 
                                'comments': 6,
                                'tags': ['teste', 'desenvolvimento', 'direito na palma da mão']};
        console.log(faqCtrl.questionTest);

    });
})();