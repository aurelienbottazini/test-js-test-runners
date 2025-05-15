const sum = require('../sum');

test('adds 22 + 27 to equal 49', () => {
  expect(sum(22, 27)).toBe(49);
});