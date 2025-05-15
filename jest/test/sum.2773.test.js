const sum = require('../sum');

test('adds 9 + 43 to equal 52', () => {
  expect(sum(9, 43)).toBe(52);
});