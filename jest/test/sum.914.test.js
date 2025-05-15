const sum = require('../sum');

test('adds 72 + 5 to equal 77', () => {
  expect(sum(72, 5)).toBe(77);
});