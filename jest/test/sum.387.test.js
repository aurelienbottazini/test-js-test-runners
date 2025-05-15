const sum = require('../sum');

test('adds 0 + 9 to equal 9', () => {
  expect(sum(0, 9)).toBe(9);
});