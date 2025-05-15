const sum = require('../sum');

test('adds 43 + 1 to equal 44', () => {
  expect(sum(43, 1)).toBe(44);
});