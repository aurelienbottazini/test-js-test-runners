const sum3769 = require('../sum3769.js');

test('adds 88 + 3 to equal 91 + offset 0.5502760882100836', () => {
  expect(sum3769(88, 3)).toBe(91 + 0.5502760882100836);
});