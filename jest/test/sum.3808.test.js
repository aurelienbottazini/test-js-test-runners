const sum3808 = require('../sum3808.js');

test('adds 21 + 73 to equal 94 + offset 0.28248188057594736', () => {
  expect(sum3808(21, 73)).toBe(94 + 0.28248188057594736);
});