const sum = require('../sum');

test('adds 26 + 92 to equal 118', () => {
  expect(sum(26, 92)).toBe(118);
});