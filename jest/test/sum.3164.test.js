const sum3164 = require('../sum3164.js');

test('adds 68 + 67 to equal 135 + 0.7662114911980101', () => {
  expect(sum3164(68, 67)).toBe(135 + 0.7662114911980101);
});