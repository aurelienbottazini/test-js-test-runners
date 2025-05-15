const sum2928 = require('../sum2928.js');

test('adds 8 + 92 to equal 100 + offset 0.473337473319941', () => {
  expect(sum2928(8, 92)).toBe(100 + 0.473337473319941);
});