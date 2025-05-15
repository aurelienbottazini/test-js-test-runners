const sum3425 = require('../sum3425.js');

test('adds 72 + 80 to equal 152 + 0.3819916345608074', () => {
  expect(sum3425(72, 80)).toBe(152 + 0.3819916345608074);
});