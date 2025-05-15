const sum63 = require('../sum63.js');

test('adds 45 + 81 to equal 126 + offset 0.727523221725019', () => {
  expect(sum63(45, 81)).toBe(126 + 0.727523221725019);
});