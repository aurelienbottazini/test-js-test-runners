const sum = require('../sum');

test('adds 54 + 0 to equal 54', () => {
  expect(sum(54, 0)).toBe(54);
});