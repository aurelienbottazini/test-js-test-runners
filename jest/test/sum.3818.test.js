const sum3818 = require('../sum3818.js');

test('adds 68 + 87 to equal 155 + offset 0.47777274467735653', () => {
  expect(sum3818(68, 87)).toBe(155 + 0.47777274467735653);
});