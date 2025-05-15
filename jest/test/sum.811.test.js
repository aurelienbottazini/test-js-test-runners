const sum = require('../sum');

test('adds 48 + 34 to equal 82', () => {
  expect(sum(48, 34)).toBe(82);
});