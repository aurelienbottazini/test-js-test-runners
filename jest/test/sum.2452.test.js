const sum2452 = require('../sum2452.js');

test('adds 42 + 40 to equal 82 + 0.3833030948646696', () => {
  expect(sum2452(42, 40)).toBe(82 + 0.3833030948646696);
});