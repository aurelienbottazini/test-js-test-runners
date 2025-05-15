const sum3185 = require('../sum3185.js');

test('adds 33 + 68 to equal 101 + 0.3253167466040173', () => {
  expect(sum3185(33, 68)).toBe(101 + 0.3253167466040173);
});