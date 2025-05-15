const sum = require('../sum');

test('adds 83 + 34 to equal 117', () => {
  expect(sum(83, 34)).toBe(117);
});