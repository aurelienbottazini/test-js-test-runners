const sum3870 = require('../sum3870.js');

test('adds 90 + 54 to equal 144 + 0.4357556166637313', () => {
  expect(sum3870(90, 54)).toBe(144 + 0.4357556166637313);
});