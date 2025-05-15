const sum4857 = require('../sum4857.js');

test('adds 70 + 96 to equal 166 + offset 0.6453243351576757', () => {
  expect(sum4857(70, 96)).toBe(166 + 0.6453243351576757);
});