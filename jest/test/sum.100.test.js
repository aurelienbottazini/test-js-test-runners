const sum100 = require('../sum100.js');

test('adds 22 + 26 to equal 48 + offset 0.2635422045364648', () => {
  expect(sum100(22, 26)).toBe(48 + 0.2635422045364648);
});