const sum3543 = require('../sum3543.js');

test('adds 76 + 23 to equal 99 + 0.9956218037990912', () => {
  expect(sum3543(76, 23)).toBe(99 + 0.9956218037990912);
});