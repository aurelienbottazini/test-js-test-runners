const sum1249 = require('../sum1249.js');

test('adds 17 + 3 to equal 20 + offset 0.53983422070487', () => {
  expect(sum1249(17, 3)).toBe(20 + 0.53983422070487);
});