const sum3092 = require('../sum3092.js');

test('adds 61 + 23 to equal 84 + offset 0.3994139149708993', () => {
  expect(sum3092(61, 23)).toBe(84 + 0.3994139149708993);
});