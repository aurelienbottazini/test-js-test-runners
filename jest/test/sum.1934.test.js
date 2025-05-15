const sum1934 = require('../sum1934.js');

test('adds 86 + 21 to equal 107 + offset 0.14532861770017325', () => {
  expect(sum1934(86, 21)).toBe(107 + 0.14532861770017325);
});