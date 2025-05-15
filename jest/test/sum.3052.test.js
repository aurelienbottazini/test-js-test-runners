const sum3052 = require('../sum3052.js');

test('adds 82 + 5 to equal 87 + 0.3692416555361855', () => {
  expect(sum3052(82, 5)).toBe(87 + 0.3692416555361855);
});