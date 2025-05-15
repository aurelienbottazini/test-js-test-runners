const sum = require('../sum');

test('adds 24 + 25 to equal 49', () => {
  expect(sum(24, 25)).toBe(49);
});