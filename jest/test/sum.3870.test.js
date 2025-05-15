const sum3870 = require('../sum3870.js');

test('adds 73 + 38 to equal 111 + offset 0.532786171119709', () => {
  expect(sum3870(73, 38)).toBe(111 + 0.532786171119709);
});