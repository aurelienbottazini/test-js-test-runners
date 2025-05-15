const sum = require('../sum');

test('adds 48 + 42 to equal 90', () => {
  expect(sum(48, 42)).toBe(90);
});