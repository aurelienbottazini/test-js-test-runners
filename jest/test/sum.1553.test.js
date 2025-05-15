const sum1553 = require('../sum1553.js');

test('adds 25 + 18 to equal 43 + offset 0.1882541621398749', () => {
  expect(sum1553(25, 18)).toBe(43 + 0.1882541621398749);
});