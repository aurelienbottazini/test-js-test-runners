const sum = require('../sum');

test('adds 28 + 43 to equal 71', () => {
  expect(sum(28, 43)).toBe(71);
});