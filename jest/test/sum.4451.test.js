const sum = require('../sum');

test('adds 47 + 1 to equal 48', () => {
  expect(sum(47, 1)).toBe(48);
});