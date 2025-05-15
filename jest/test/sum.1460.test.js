const sum = require('../sum');

test('adds 39 + 14 to equal 53', () => {
  expect(sum(39, 14)).toBe(53);
});