const sum4845 = require('../sum4845.js');

test('adds 66 + 10 to equal 76 + offset 0.4286796880827761', () => {
  expect(sum4845(66, 10)).toBe(76 + 0.4286796880827761);
});