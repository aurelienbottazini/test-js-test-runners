const sum = require('../sum');

test('adds 29 + 23 to equal 52', () => {
  expect(sum(29, 23)).toBe(52);
});