const sum3052 = require('../sum3052.js');

test('adds 54 + 57 to equal 111 + offset 0.18730333020543743', () => {
  expect(sum3052(54, 57)).toBe(111 + 0.18730333020543743);
});