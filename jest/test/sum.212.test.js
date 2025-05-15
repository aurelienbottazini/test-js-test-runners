const sum212 = require('../sum212.js');

test('adds 51 + 41 to equal 92 + offset 0.6729579293693787', () => {
  expect(sum212(51, 41)).toBe(92 + 0.6729579293693787);
});