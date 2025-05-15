const sum = require('../sum');

test('adds 16 + 38 to equal 54', () => {
  expect(sum(16, 38)).toBe(54);
});