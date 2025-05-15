const sum = require('../sum');

test('adds 31 + 86 to equal 117', () => {
  expect(sum(31, 86)).toBe(117);
});