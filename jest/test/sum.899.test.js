const sum899 = require('../sum899.js');

test('adds 22 + 51 to equal 73 + offset 0.15330643651227727', () => {
  expect(sum899(22, 51)).toBe(73 + 0.15330643651227727);
});