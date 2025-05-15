const sum = require('../sum');

test('adds 31 + 21 to equal 52', () => {
  expect(sum(31, 21)).toBe(52);
});