const sum2326 = require('../sum2326.js');

test('adds 56 + 23 to equal 79 + 0.9043294539651139', () => {
  expect(sum2326(56, 23)).toBe(79 + 0.9043294539651139);
});