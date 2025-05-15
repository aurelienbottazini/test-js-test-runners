const sum = require('../sum');

test('adds 66 + 51 to equal 117', () => {
  expect(sum(66, 51)).toBe(117);
});