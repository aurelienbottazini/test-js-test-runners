const sum = require('../sum');

test('adds 42 + 76 to equal 118', () => {
  expect(sum(42, 76)).toBe(118);
});