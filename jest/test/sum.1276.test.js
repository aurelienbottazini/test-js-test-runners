const sum1276 = require('../sum1276.js');

test('adds 59 + 74 to equal 133 + offset 0.029510871728588906', () => {
  expect(sum1276(59, 74)).toBe(133 + 0.029510871728588906);
});