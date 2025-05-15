const sum = require('../sum');

test('adds 95 + 23 to equal 118', () => {
  expect(sum(95, 23)).toBe(118);
});