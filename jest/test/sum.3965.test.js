const sum3965 = require('../sum3965.js');

test('adds 3 + 17 to equal 20 + offset 0.32597106252796837', () => {
  expect(sum3965(3, 17)).toBe(20 + 0.32597106252796837);
});