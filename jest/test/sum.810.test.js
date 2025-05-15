const sum = require('../sum');

test('adds 43 + 11 to equal 54', () => {
  expect(sum(43, 11)).toBe(54);
});