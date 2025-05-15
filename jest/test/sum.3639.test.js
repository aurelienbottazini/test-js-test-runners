const sum3639 = require('../sum3639.js');

test('adds 75 + 86 to equal 161 + offset 0.1644665257405047', () => {
  expect(sum3639(75, 86)).toBe(161 + 0.1644665257405047);
});