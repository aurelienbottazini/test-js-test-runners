const sum = require('../sum');

test('adds 47 + 70 to equal 117', () => {
  expect(sum(47, 70)).toBe(117);
});