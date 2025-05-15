const sum = require('../sum');

test('adds 52 + 1 to equal 53', () => {
  expect(sum(52, 1)).toBe(53);
});