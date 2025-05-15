const sum4830 = require('../sum4830.js');

test('adds 79 + 9 to equal 88 + offset 0.10231206108835234', () => {
  expect(sum4830(79, 9)).toBe(88 + 0.10231206108835234);
});