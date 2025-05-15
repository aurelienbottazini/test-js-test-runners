const sum2765 = require('../sum2765.js');

test('adds 63 + 77 to equal 140 + 0.9562506163964617', () => {
  expect(sum2765(63, 77)).toBe(140 + 0.9562506163964617);
});