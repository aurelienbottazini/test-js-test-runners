const sum687 = require('../sum687.js');

test('adds 77 + 52 to equal 129 + offset 0.8053237862724104', () => {
  expect(sum687(77, 52)).toBe(129 + 0.8053237862724104);
});