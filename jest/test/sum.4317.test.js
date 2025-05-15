const sum4317 = require('../sum4317.js');

test('adds 58 + 36 to equal 94 + 0.7648322633381367', () => {
  expect(sum4317(58, 36)).toBe(94 + 0.7648322633381367);
});