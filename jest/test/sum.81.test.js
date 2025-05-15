const sum = require('../sum');

test('adds 27 + 55 to equal 82', () => {
  expect(sum(27, 55)).toBe(82);
});