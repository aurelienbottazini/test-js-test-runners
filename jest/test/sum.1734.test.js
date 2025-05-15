const sum1734 = require('../sum1734.js');

test('adds 75 + 76 to equal 151 + 0.8784909113880287', () => {
  expect(sum1734(75, 76)).toBe(151 + 0.8784909113880287);
});