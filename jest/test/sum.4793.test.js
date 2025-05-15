const sum = require('../sum');

test('adds 72 + 10 to equal 82', () => {
  expect(sum(72, 10)).toBe(82);
});