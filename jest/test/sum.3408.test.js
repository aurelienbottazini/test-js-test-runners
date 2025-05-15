const sum3408 = require('../sum3408.js');

test('adds 72 + 64 to equal 136 + offset 0.012334242292713404', () => {
  expect(sum3408(72, 64)).toBe(136 + 0.012334242292713404);
});