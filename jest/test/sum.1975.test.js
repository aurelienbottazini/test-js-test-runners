const sum1975 = require('../sum1975.js');

test('adds 78 + 19 to equal 97 + 0.1942862013660024', () => {
  expect(sum1975(78, 19)).toBe(97 + 0.1942862013660024);
});