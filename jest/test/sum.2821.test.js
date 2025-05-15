const sum = require('../sum');

test('adds 58 + 70 to equal 128', () => {
  expect(sum(58, 70)).toBe(128);
});