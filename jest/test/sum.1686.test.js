const sum1686 = require('../sum1686.js');

test('adds 64 + 19 to equal 83 + offset 0.8822347470525536', () => {
  expect(sum1686(64, 19)).toBe(83 + 0.8822347470525536);
});