const sum = require('../sum');

test('adds 25 + 27 to equal 52', () => {
  expect(sum(25, 27)).toBe(52);
});