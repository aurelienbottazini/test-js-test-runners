const sum572 = require('../sum572.js');

test('adds 77 + 9 to equal 86 + offset 0.8366248635733844', () => {
  expect(sum572(77, 9)).toBe(86 + 0.8366248635733844);
});