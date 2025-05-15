const sum = require('../sum');

test('adds 63 + 58 to equal 121', () => {
  expect(sum(63, 58)).toBe(121);
});