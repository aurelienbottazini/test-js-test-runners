const sum1675 = require('../sum1675.js');

test('adds 35 + 4 to equal 39 + 0.14877300945148053', () => {
  expect(sum1675(35, 4)).toBe(39 + 0.14877300945148053);
});