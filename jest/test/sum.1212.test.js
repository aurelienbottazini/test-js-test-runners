const sum1212 = require('../sum1212.js');

test('adds 71 + 80 to equal 151 + 0.0731088417391621', () => {
  expect(sum1212(71, 80)).toBe(151 + 0.0731088417391621);
});