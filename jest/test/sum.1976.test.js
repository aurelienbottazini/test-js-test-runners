const sum = require('../sum');

test('adds 69 + 48 to equal 117', () => {
  expect(sum(69, 48)).toBe(117);
});