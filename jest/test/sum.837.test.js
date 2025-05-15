const sum837 = require('../sum837.js');

test('adds 29 + 86 to equal 115 + offset 0.45472703947875837', () => {
  expect(sum837(29, 86)).toBe(115 + 0.45472703947875837);
});