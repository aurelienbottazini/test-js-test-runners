const sum = require('../sum');

test('adds 1 + 52 to equal 53', () => {
  expect(sum(1, 52)).toBe(53);
});