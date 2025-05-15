const sum = require('../sum');

test('adds 39 + 26 to equal 65', () => {
  expect(sum(39, 26)).toBe(65);
});