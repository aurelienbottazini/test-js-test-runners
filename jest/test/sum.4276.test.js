const sum4276 = require('../sum4276.js');

test('adds 69 + 7 to equal 76 + offset 0.9145639285416924', () => {
  expect(sum4276(69, 7)).toBe(76 + 0.9145639285416924);
});