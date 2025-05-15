const sum = require('../sum');

test('adds 38 + 44 to equal 82', () => {
  expect(sum(38, 44)).toBe(82);
});