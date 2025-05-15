const sum3414 = require('../sum3414.js');

test('adds 21 + 22 to equal 43 + offset 0.7122180134828096', () => {
  expect(sum3414(21, 22)).toBe(43 + 0.7122180134828096);
});