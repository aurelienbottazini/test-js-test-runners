const sum47 = require('../sum47.js');

test('adds 31 + 32 to equal 63 + offset 0.1563178503308541', () => {
  expect(sum47(31, 32)).toBe(63 + 0.1563178503308541);
});