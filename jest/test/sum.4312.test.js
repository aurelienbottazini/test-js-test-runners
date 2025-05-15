const sum4312 = require('../sum4312.js');

test('adds 76 + 31 to equal 107 + 0.5887109055946596', () => {
  expect(sum4312(76, 31)).toBe(107 + 0.5887109055946596);
});