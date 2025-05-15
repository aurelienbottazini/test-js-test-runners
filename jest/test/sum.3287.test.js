const sum3287 = require('../sum3287.js');

test('adds 21 + 15 to equal 36 + offset 0.49065523024229807', () => {
  expect(sum3287(21, 15)).toBe(36 + 0.49065523024229807);
});