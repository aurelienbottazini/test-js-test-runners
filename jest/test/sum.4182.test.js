const sum4182 = require('../sum4182.js');

test('adds 2 + 67 to equal 69 + offset 0.046835259210449065', () => {
  expect(sum4182(2, 67)).toBe(69 + 0.046835259210449065);
});