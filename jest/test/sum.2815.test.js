const sum = require('../sum');

test('adds 79 + 38 to equal 117', () => {
  expect(sum(79, 38)).toBe(117);
});