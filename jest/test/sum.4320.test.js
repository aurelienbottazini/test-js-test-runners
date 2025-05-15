const sum4320 = require('../sum4320.js');

test('adds 34 + 98 to equal 132 + offset 0.07849236913042457', () => {
  expect(sum4320(34, 98)).toBe(132 + 0.07849236913042457);
});