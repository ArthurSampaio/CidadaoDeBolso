'use strict';
(function () {
    var app = angular.module('cdbApp');

    app.controller("FAQController", function FAQController($state) {

        var faqCtrl = this;

        faqCtrl.questionTest = {'title': "Pergunta Sobre Algo Juridico",
                                'author': "Zeca Urubu",
                                'answer': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum rhoncus dolor, in feugiat nisi ultrices sed. Vivamus eleifend nisl in feugiat lacinia. Phasellus viverra sodales posuere.",
                                'likes': 52,
                                'comments': 6,
                                'tags': ['teste', 'desenvolvimento', 'direito', 'na palma da mão']};
        console.log(faqCtrl.questionTest);

    });
})();