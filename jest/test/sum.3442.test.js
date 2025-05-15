const sum = require('../sum');

test('adds 59 + 23 to equal 82', () => {
  expect(sum(59, 23)).toBe(82);
});