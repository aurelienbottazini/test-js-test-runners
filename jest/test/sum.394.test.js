const sum = require('../sum');

test('adds 51 + 31 to equal 82', () => {
  expect(sum(51, 31)).toBe(82);
});