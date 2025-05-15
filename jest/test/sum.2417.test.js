const sum2417 = require('../sum2417.js');

test('adds 22 + 42 to equal 64 + 0.6890075083941354', () => {
  expect(sum2417(22, 42)).toBe(64 + 0.6890075083941354);
});