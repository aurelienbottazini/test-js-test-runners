const sum = require('../sum');

test('adds 28 + 21 to equal 49', () => {
  expect(sum(28, 21)).toBe(49);
});