const sum = require('../sum');

test('adds 29 + 56 to equal 85', () => {
  expect(sum(29, 56)).toBe(85);
});