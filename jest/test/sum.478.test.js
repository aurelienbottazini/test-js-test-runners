const sum = require('../sum');

test('adds 95 + 22 to equal 117', () => {
  expect(sum(95, 22)).toBe(117);
});