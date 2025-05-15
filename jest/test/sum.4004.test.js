const sum = require('../sum');

test('adds 16 + 86 to equal 102', () => {
  expect(sum(16, 86)).toBe(102);
});