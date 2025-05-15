const sum = require('../sum');

test('adds 6 + 43 to equal 49', () => {
  expect(sum(6, 43)).toBe(49);
});