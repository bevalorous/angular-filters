'use strict';

angular.module('bevalorous.angular.filters')
    .filter('temperature', [
        '$filter',
        function ($filter) {
            return function (number, fractionSize) {
                var result = $filter('number')(Math.abs(number), fractionSize),
                    sign = "";
                if (number > 0) {
                    sign = "+";
                } else if (number < 0) {
                    sign = "−";
                }
                return sign + result;
            };
        }
    ]);