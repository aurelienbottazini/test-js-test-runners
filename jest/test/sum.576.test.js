const sum = require('../sum');

test('adds 39 + 6 to equal 45', () => {
  expect(sum(39, 6)).toBe(45);
});