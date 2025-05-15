const sum703 = require('../sum703.js');

test('adds 57 + 80 to equal 137 + offset 0.5124726139119781', () => {
  expect(sum703(57, 80)).toBe(137 + 0.5124726139119781);
});