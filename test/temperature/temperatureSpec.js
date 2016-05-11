'use strict';

describe('temperature', function () {
  var temperatureFilter,
      randomTemperature = Math.random();

  beforeEach(module('bevalorous.angular.filters'));

  beforeEach(inject(function ($filter) {
    temperatureFilter = $filter('temperature');
  }));

  it('should format non-temperature', function () {
    expect(temperatureFilter("abc", 0)).toEqual("");
  });

  it('should format zero temperature', function () {
    expect(temperatureFilter(0, 0)).toEqual("0");
  });

  it('should format integer positive temperature', function () {
    expect(temperatureFilter(12, 0)).toEqual("+12");
  });

  it('should format integer negative temperature', function () {
    expect(temperatureFilter(-12, 0)).toEqual("−12");
  });

  it('should format float positive temperature', function () {
    expect(temperatureFilter(12.345, 1)).toEqual("+12.3");
  });

  it('should format float negative temperature', function () {
    expect(temperatureFilter(-12.345, 1)).toEqual("−12.3");
  });
});