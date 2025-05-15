const sum3479 = require('../sum3479.js');

test('adds 59 + 68 to equal 127 + offset 0.6827451691252585', () => {
  expect(sum3479(59, 68)).toBe(127 + 0.6827451691252585);
});