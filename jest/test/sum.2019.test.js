const sum = require('../sum');

test('adds 19 + 98 to equal 117', () => {
  expect(sum(19, 98)).toBe(117);
});