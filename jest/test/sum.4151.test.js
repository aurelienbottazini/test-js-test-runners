const sum4151 = require('../sum4151.js');

test('adds 76 + 19 to equal 95 + offset 0.37354775248065386', () => {
  expect(sum4151(76, 19)).toBe(95 + 0.37354775248065386);
});