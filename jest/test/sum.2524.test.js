const sum2524 = require('../sum2524.js');

test('adds 92 + 9 to equal 101 + 0.2835070736998968', () => {
  expect(sum2524(92, 9)).toBe(101 + 0.2835070736998968);
});