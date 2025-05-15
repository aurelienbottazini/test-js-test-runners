const sum4539 = require('../sum4539.js');

test('adds 30 + 47 to equal 77 + offset 0.39034704312690616', () => {
  expect(sum4539(30, 47)).toBe(77 + 0.39034704312690616);
});