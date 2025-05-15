const sum3582 = require('../sum3582.js');

test('adds 11 + 73 to equal 84 + offset 0.3653446419241997', () => {
  expect(sum3582(11, 73)).toBe(84 + 0.3653446419241997);
});