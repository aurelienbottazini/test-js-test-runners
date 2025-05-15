const sum4758 = require('../sum4758.js');

test('adds 13 + 13 to equal 26 + offset 0.536765996441593', () => {
  expect(sum4758(13, 13)).toBe(26 + 0.536765996441593);
});