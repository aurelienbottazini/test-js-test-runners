const sum4668 = require('../sum4668.js');

test('adds 25 + 44 to equal 69 + offset 0.43550185795155416', () => {
  expect(sum4668(25, 44)).toBe(69 + 0.43550185795155416);
});