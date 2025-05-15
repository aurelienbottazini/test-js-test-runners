const sum1013 = require('../sum1013.js');

test('adds 48 + 75 to equal 123 + offset 0.2253304150201535', () => {
  expect(sum1013(48, 75)).toBe(123 + 0.2253304150201535);
});