const sum1869 = require('../sum1869.js');

test('adds 34 + 82 to equal 116 + 0.7033274462896438', () => {
  expect(sum1869(34, 82)).toBe(116 + 0.7033274462896438);
});