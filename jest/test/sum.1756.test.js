const sum1756 = require('../sum1756.js');

test('adds 47 + 20 to equal 67 + 0.4608658849108681', () => {
  expect(sum1756(47, 20)).toBe(67 + 0.4608658849108681);
});