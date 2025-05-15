const sum624 = require('../sum624.js');

test('adds 49 + 16 to equal 65 + offset 0.10653904662022096', () => {
  expect(sum624(49, 16)).toBe(65 + 0.10653904662022096);
});