const sum3921 = require('../sum3921.js');

test('adds 26 + 11 to equal 37 + offset 0.960730514198538', () => {
  expect(sum3921(26, 11)).toBe(37 + 0.960730514198538);
});