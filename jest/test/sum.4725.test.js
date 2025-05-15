const sum4725 = require('../sum4725.js');

test('adds 91 + 70 to equal 161 + 0.47652079332588726', () => {
  expect(sum4725(91, 70)).toBe(161 + 0.47652079332588726);
});