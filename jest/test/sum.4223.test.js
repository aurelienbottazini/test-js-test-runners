const sum4223 = require('../sum4223.js');

test('adds 69 + 95 to equal 164 + offset 0.020571381522662135', () => {
  expect(sum4223(69, 95)).toBe(164 + 0.020571381522662135);
});