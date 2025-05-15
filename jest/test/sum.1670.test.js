const sum1670 = require('../sum1670.js');

test('adds 97 + 20 to equal 117 + offset 0.80822062621707', () => {
  expect(sum1670(97, 20)).toBe(117 + 0.80822062621707);
});