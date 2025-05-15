const sum = require('../sum');

test('adds 53 + 0 to equal 53', () => {
  expect(sum(53, 0)).toBe(53);
});