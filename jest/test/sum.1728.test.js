const sum1728 = require('../sum1728.js');

test('adds 92 + 19 to equal 111 + 0.4744646125042602', () => {
  expect(sum1728(92, 19)).toBe(111 + 0.4744646125042602);
});