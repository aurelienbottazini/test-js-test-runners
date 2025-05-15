const sum = require('../sum');

test('adds 68 + 50 to equal 118', () => {
  expect(sum(68, 50)).toBe(118);
});