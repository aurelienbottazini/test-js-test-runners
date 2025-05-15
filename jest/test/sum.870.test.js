const sum = require('../sum');

test('adds 49 + 68 to equal 117', () => {
  expect(sum(49, 68)).toBe(117);
});