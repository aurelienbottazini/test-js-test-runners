const sum = require('../sum');

test('adds 72 + 27 to equal 99', () => {
  expect(sum(72, 27)).toBe(99);
});