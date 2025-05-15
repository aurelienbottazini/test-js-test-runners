const sum1351 = require('../sum1351.js');

test('adds 15 + 84 to equal 99 + offset 0.8657572430088522', () => {
  expect(sum1351(15, 84)).toBe(99 + 0.8657572430088522);
});