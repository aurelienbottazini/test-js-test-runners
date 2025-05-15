const sum4090 = require('../sum4090.js');

test('adds 7 + 51 to equal 58 + 0.6761490387948498', () => {
  expect(sum4090(7, 51)).toBe(58 + 0.6761490387948498);
});