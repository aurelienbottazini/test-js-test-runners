const sum3916 = require('../sum3916.js');

test('adds 97 + 43 to equal 140 + offset 0.678513792653845', () => {
  expect(sum3916(97, 43)).toBe(140 + 0.678513792653845);
});