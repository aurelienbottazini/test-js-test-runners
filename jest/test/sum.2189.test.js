const sum2189 = require('../sum2189.js');

test('adds 44 + 13 to equal 57 + 0.8056677129767386', () => {
  expect(sum2189(44, 13)).toBe(57 + 0.8056677129767386);
});