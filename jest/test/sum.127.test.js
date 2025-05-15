const sum = require('../sum');

test('adds 48 + 23 to equal 71', () => {
  expect(sum(48, 23)).toBe(71);
});