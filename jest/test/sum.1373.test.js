const sum1373 = require('../sum1373.js');

test('adds 72 + 55 to equal 127 + offset 0.9470874997694132', () => {
  expect(sum1373(72, 55)).toBe(127 + 0.9470874997694132);
});