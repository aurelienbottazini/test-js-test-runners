const sum = require('../sum');

test('adds 29 + 20 to equal 49', () => {
  expect(sum(29, 20)).toBe(49);
});