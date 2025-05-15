const sum2683 = require('../sum2683.js');

test('adds 1 + 83 to equal 84 + offset 0.19701849253898251', () => {
  expect(sum2683(1, 83)).toBe(84 + 0.19701849253898251);
});