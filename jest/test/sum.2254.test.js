const sum2254 = require('../sum2254.js');

test('adds 47 + 86 to equal 133 + 0.7715226860225132', () => {
  expect(sum2254(47, 86)).toBe(133 + 0.7715226860225132);
});