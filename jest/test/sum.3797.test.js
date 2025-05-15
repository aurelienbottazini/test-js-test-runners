const sum = require('../sum');

test('adds 39 + 78 to equal 117', () => {
  expect(sum(39, 78)).toBe(117);
});