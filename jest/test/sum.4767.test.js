const sum = require('../sum');

test('adds 29 + 85 to equal 114', () => {
  expect(sum(29, 85)).toBe(114);
});