'use strict';

describe('temperature', function () {
    var temperatureFilter,
        randomTemperature = Math.random();

    beforeEach(module('bevalorous.angular.filters'));

    beforeEach(inject(function ($filter) {
        temperatureFilter = $filter('temperature');
    }));

    describe("format different temperatures", function () {
        it('should format non-temperature', function () {
            expect(temperatureFilter("abc")).toEqual(" °C");
        });

        it('should format zero temperature', function () {
            expect(temperatureFilter(0)).toEqual("0 °C");
        });

        it('should format integer positive temperature', function () {
            expect(temperatureFilter(12)).toEqual("+12 °C");
        });

        it('should format integer negative temperature', function () {
            expect(temperatureFilter(-12)).toEqual("−12 °C");
        });

        it('should format float positive temperature', function () {
            expect(temperatureFilter(12.345, 'C', 1)).toEqual("+12.3 °C");
        });

        it('should format float negative temperature', function () {
            expect(temperatureFilter(-12.345, 'C', 1)).toEqual("−12.3 °C");
        });
    });

    describe("format different scales", function () {
        it('should format zero temperature', function () {
            expect(temperatureFilter(0, 'F')).toEqual("0 °F");
        });

        it('should format integer positive temperature', function () {
            expect(temperatureFilter(12, 'F')).toEqual("+12 °F");
        });

        it('should format integer negative temperature', function () {
            expect(temperatureFilter(-12, 'F')).toEqual("−12 °F");
        });
    });

});