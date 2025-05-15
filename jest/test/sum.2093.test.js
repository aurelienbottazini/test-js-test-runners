const sum = require('../sum');

test('adds 38 + 79 to equal 117', () => {
  expect(sum(38, 79)).toBe(117);
});