const sum3994 = require('../sum3994.js');

test('adds 57 + 49 to equal 106 + offset 0.6502831327503336', () => {
  expect(sum3994(57, 49)).toBe(106 + 0.6502831327503336);
});