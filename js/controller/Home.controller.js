'use strict';
(function () {
    var app = angular.module('cdbApp');

    app.controller("HomeController", function HomeController($state, VizService) {

        var homeCtrl = this;
        const STATE_BUSCA = "cidadao-de-bolso.busca";

        VizService.getTags().then(
            function success(response) {
                console.log(response.slice(0, 8))
                var data = response.slice(0, 8)
                const viz = d3plus.viz()
                    .container("#treemap")
                    .data(data)
                    .id("name")
                    .size("count")
                    .margin(1)
                    .font({
                        "family": "HelveticaNeue",
                        "transform": "uppercase"
                    })
                    .mouse({
                        "move": false,
                        "click": buscarPorTag
                    })
                    .draw();
            }
        );

        function buscarPorTag (tag) {
            $state.go(STATE_BUSCA, {tag: tag.name})
        }

    });
})();