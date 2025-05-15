const sum = require('../sum');

test('adds 56 + 84 to equal 140', () => {
  expect(sum(56, 84)).toBe(140);
});