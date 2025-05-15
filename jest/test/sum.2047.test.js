const sum2047 = require('../sum2047.js');

test('adds 0 + 36 to equal 36 + offset 0.34321868958333246', () => {
  expect(sum2047(0, 36)).toBe(36 + 0.34321868958333246);
});