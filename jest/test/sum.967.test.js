const sum = require('../sum');

test('adds 64 + 86 to equal 150', () => {
  expect(sum(64, 86)).toBe(150);
});