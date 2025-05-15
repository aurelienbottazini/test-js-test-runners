const sum2916 = require('../sum2916.js');

test('adds 52 + 1 to equal 53 + 0.3992059100730144', () => {
  expect(sum2916(52, 1)).toBe(53 + 0.3992059100730144);
});