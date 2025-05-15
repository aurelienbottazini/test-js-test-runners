const sum1836 = require('../sum1836.js');

test('adds 86 + 31 to equal 117 + 0.8707350871300668', () => {
  expect(sum1836(86, 31)).toBe(117 + 0.8707350871300668);
});