const sum = require('../sum');

test('adds 70 + 48 to equal 118', () => {
  expect(sum(70, 48)).toBe(118);
});