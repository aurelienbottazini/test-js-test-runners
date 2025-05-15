const sum = require('../sum');

test('adds 29 + 6 to equal 35', () => {
  expect(sum(29, 6)).toBe(35);
});