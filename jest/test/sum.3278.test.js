const sum3278 = require('../sum3278.js');

test('adds 9 + 65 to equal 74 + 0.06918796089720591', () => {
  expect(sum3278(9, 65)).toBe(74 + 0.06918796089720591);
});