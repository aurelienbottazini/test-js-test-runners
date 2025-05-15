const sum4402 = require('../sum4402.js');

test('adds 17 + 14 to equal 31 + 0.4786699355106807', () => {
  expect(sum4402(17, 14)).toBe(31 + 0.4786699355106807);
});