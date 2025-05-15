const sum4725 = require('../sum4725.js');

test('adds 12 + 52 to equal 64 + offset 0.7109753108889605', () => {
  expect(sum4725(12, 52)).toBe(64 + 0.7109753108889605);
});