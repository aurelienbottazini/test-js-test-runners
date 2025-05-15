const sum3009 = require('../sum3009.js');

test('adds 38 + 95 to equal 133 + 0.35051117002186705', () => {
  expect(sum3009(38, 95)).toBe(133 + 0.35051117002186705);
});