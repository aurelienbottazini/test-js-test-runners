const sum = require('../sum');

test('adds 39 + 32 to equal 71', () => {
  expect(sum(39, 32)).toBe(71);
});