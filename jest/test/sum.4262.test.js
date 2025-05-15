const sum = require('../sum');

test('adds 31 + 23 to equal 54', () => {
  expect(sum(31, 23)).toBe(54);
});