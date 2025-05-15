const sum = require('../sum');

test('adds 4 + 50 to equal 54', () => {
  expect(sum(4, 50)).toBe(54);
});