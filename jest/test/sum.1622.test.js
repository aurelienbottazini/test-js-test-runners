const sum = require('../sum');

test('adds 76 + 41 to equal 117', () => {
  expect(sum(76, 41)).toBe(117);
});