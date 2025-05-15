const sum = require('../sum');

test('adds 64 + 7 to equal 71', () => {
  expect(sum(64, 7)).toBe(71);
});