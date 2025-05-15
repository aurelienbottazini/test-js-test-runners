const sum1083 = require('../sum1083.js');

test('adds 83 + 53 to equal 136 + 0.22195403822992443', () => {
  expect(sum1083(83, 53)).toBe(136 + 0.22195403822992443);
});