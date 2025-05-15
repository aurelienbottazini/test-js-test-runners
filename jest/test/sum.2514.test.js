const sum2514 = require('../sum2514.js');

test('adds 50 + 16 to equal 66 + offset 0.39823339015364045', () => {
  expect(sum2514(50, 16)).toBe(66 + 0.39823339015364045);
});