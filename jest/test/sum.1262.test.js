const sum = require('../sum');

test('adds 49 + 69 to equal 118', () => {
  expect(sum(49, 69)).toBe(118);
});