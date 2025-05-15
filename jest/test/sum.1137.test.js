const sum = require('../sum');

test('adds 6 + 1 to equal 7', () => {
  expect(sum(6, 1)).toBe(7);
});