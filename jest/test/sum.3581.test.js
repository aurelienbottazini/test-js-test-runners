const sum3581 = require('../sum3581.js');

test('adds 8 + 98 to equal 106 + 0.22686646263263488', () => {
  expect(sum3581(8, 98)).toBe(106 + 0.22686646263263488);
});