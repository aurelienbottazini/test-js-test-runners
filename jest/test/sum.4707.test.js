const sum4707 = require('../sum4707.js');

test('adds 25 + 38 to equal 63 + offset 0.9607037119329981', () => {
  expect(sum4707(25, 38)).toBe(63 + 0.9607037119329981);
});