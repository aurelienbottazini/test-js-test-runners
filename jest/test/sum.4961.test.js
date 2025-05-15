const sum4961 = require('../sum4961.js');

test('adds 15 + 9 to equal 24 + 0.5269989636791582', () => {
  expect(sum4961(15, 9)).toBe(24 + 0.5269989636791582);
});