const sum = require('../sum');

test('adds 48 + 92 to equal 140', () => {
  expect(sum(48, 92)).toBe(140);
});