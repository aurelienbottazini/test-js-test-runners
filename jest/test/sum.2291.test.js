const sum = require('../sum');

test('adds 34 + 84 to equal 118', () => {
  expect(sum(34, 84)).toBe(118);
});