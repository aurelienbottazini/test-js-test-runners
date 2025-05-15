const sum1283 = require('../sum1283.js');

test('adds 75 + 61 to equal 136 + 0.9716850093851227', () => {
  expect(sum1283(75, 61)).toBe(136 + 0.9716850093851227);
});