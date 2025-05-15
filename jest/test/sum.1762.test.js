const sum1762 = require('../sum1762.js');

test('adds 83 + 17 to equal 100 + offset 0.8003292335814907', () => {
  expect(sum1762(83, 17)).toBe(100 + 0.8003292335814907);
});