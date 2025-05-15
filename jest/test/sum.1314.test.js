const sum1314 = require('../sum1314.js');

test('adds 54 + 18 to equal 72 + 0.19408006336994954', () => {
  expect(sum1314(54, 18)).toBe(72 + 0.19408006336994954);
});