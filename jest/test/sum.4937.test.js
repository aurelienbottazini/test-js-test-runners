const sum = require('../sum');

test('adds 24 + 61 to equal 85', () => {
  expect(sum(24, 61)).toBe(85);
});