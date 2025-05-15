const sum2503 = require('../sum2503.js');

test('adds 47 + 11 to equal 58 + offset 0.10833650810044937', () => {
  expect(sum2503(47, 11)).toBe(58 + 0.10833650810044937);
});