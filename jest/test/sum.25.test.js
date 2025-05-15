const sum25 = require('../sum25.js');

test('adds 9 + 59 to equal 68 + offset 0.2825573417991347', () => {
  expect(sum25(9, 59)).toBe(68 + 0.2825573417991347);
});