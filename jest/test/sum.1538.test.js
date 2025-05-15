const sum1538 = require('../sum1538.js');

test('adds 55 + 44 to equal 99 + 0.7009050013688853', () => {
  expect(sum1538(55, 44)).toBe(99 + 0.7009050013688853);
});