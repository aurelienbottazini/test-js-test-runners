const sum4573 = require('../sum4573.js');

test('adds 43 + 14 to equal 57 + offset 0.012118260416283833', () => {
  expect(sum4573(43, 14)).toBe(57 + 0.012118260416283833);
});