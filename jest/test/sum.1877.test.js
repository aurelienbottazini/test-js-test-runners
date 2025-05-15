const sum = require('../sum');

test('adds 80 + 42 to equal 122', () => {
  expect(sum(80, 42)).toBe(122);
});