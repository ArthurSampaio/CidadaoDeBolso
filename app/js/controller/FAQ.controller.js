'use strict';
(function () {
    var app = angular.module('cdbApp');

    app.controller("FAQController", function FAQController($state, tag) {

        var faqCtrl = this;
        const STATE_LEI = "lei";
        faqCtrl.tag = tag; 

        faqCtrl.questions = [{
            'title': "Pergunta Sobre Algo Juridico",
            'author': "Zeca Urubu",
            'answer': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum rhoncus dolor, in feugiat nisi ultrices sed. Vivamus eleifend nisl in feugiat lacinia. Phasellus viverra sodales posuere.",
            'likes': 52,
            'comments': 6,
            'tags': ['teste', 'desenvolvimento', 'direito', 'na palma da mão']
        },
        {
            'title': "Devo pagar couvert em restaurantes?",
            'author': "Mão de vaca top",
            'answer': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum rhoncus dolor, in feugiat nisi ultrices sed. Vivamus eleifend nisl in feugiat lacinia. Phasellus viverra sodales posuere.",
            'likes': 5,
            'comments': 9,
            'tags': ['bar', 'cobrança', '10%', 'bdc bosta']
        }];

        faqCtrl.questionTest = faqCtrl.questions[1];


    });
})();