const sum405 = require('../sum405.js');

test('adds 11 + 71 to equal 82 + 0.245069518027053', () => {
  expect(sum405(11, 71)).toBe(82 + 0.245069518027053);
});