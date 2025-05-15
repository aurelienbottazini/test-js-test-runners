const sum516 = require('../sum516.js');

test('adds 94 + 41 to equal 135 + 0.5369883856771633', () => {
  expect(sum516(94, 41)).toBe(135 + 0.5369883856771633);
});