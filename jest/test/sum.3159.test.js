const sum3159 = require('../sum3159.js');

test('adds 1 + 67 to equal 68 + 0.24928159278862227', () => {
  expect(sum3159(1, 67)).toBe(68 + 0.24928159278862227);
});