const sum = require('../sum');

test('adds 32 + 86 to equal 118', () => {
  expect(sum(32, 86)).toBe(118);
});