const sum = require('../sum');

test('adds 6 + 48 to equal 54', () => {
  expect(sum(6, 48)).toBe(54);
});