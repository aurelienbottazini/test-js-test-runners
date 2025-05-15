const sum3897 = require('../sum3897.js');

test('adds 51 + 25 to equal 76 + offset 0.5234840247122411', () => {
  expect(sum3897(51, 25)).toBe(76 + 0.5234840247122411);
});