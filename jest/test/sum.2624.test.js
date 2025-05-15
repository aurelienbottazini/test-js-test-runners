const sum2624 = require('../sum2624.js');

test('adds 12 + 97 to equal 109 + offset 0.9118353354454807', () => {
  expect(sum2624(12, 97)).toBe(109 + 0.9118353354454807);
});