const sum402 = require('../sum402.js');

test('adds 67 + 38 to equal 105 + 0.036151621237601295', () => {
  expect(sum402(67, 38)).toBe(105 + 0.036151621237601295);
});