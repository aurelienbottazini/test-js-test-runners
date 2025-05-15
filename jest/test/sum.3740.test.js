const sum3740 = require('../sum3740.js');

test('adds 78 + 88 to equal 166 + 0.16220533896257094', () => {
  expect(sum3740(78, 88)).toBe(166 + 0.16220533896257094);
});