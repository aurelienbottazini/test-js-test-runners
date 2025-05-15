const sum1943 = require('../sum1943.js');

test('adds 96 + 55 to equal 151 + 0.2650852482707331', () => {
  expect(sum1943(96, 55)).toBe(151 + 0.2650852482707331);
});