const sum1281 = require('../sum1281.js');

test('adds 27 + 86 to equal 113 + offset 0.7097250439916197', () => {
  expect(sum1281(27, 86)).toBe(113 + 0.7097250439916197);
});