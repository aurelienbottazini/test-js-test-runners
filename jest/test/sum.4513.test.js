const sum4513 = require('../sum4513.js');

test('adds 59 + 67 to equal 126 + offset 0.9574423732048342', () => {
  expect(sum4513(59, 67)).toBe(126 + 0.9574423732048342);
});