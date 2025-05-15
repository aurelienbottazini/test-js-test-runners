const sum3004 = require('../sum3004.js');

test('adds 48 + 3 to equal 51 + offset 0.738235448048784', () => {
  expect(sum3004(48, 3)).toBe(51 + 0.738235448048784);
});