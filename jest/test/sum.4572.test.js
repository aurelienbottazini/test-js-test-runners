const sum4572 = require('../sum4572.js');

test('adds 58 + 99 to equal 157 + offset 0.3041887467249794', () => {
  expect(sum4572(58, 99)).toBe(157 + 0.3041887467249794);
});