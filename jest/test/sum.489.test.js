const sum489 = require('../sum489.js');

test('adds 8 + 69 to equal 77 + 0.863372740090599', () => {
  expect(sum489(8, 69)).toBe(77 + 0.863372740090599);
});