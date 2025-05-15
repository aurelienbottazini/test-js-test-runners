const sum1643 = require('../sum1643.js');

test('adds 97 + 41 to equal 138 + 0.015775512088113453', () => {
  expect(sum1643(97, 41)).toBe(138 + 0.015775512088113453);
});