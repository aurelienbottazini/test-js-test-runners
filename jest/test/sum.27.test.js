const sum = require('../sum');

test('adds 80 + 38 to equal 118', () => {
  expect(sum(80, 38)).toBe(118);
});