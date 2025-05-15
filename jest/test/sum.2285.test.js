const sum2285 = require('../sum2285.js');

test('adds 79 + 70 to equal 149 + 0.289941335495307', () => {
  expect(sum2285(79, 70)).toBe(149 + 0.289941335495307);
});