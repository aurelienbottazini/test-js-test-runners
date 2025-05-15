const sum4188 = require('../sum4188.js');

test('adds 54 + 43 to equal 97 + offset 0.301843248100912', () => {
  expect(sum4188(54, 43)).toBe(97 + 0.301843248100912);
});