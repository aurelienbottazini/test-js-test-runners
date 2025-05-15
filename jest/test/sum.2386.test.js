const sum2386 = require('../sum2386.js');

test('adds 60 + 64 to equal 124 + 0.41161565018357826', () => {
  expect(sum2386(60, 64)).toBe(124 + 0.41161565018357826);
});