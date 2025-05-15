const sum175 = require('../sum175.js');

test('adds 42 + 77 to equal 119 + offset 0.9810325293275682', () => {
  expect(sum175(42, 77)).toBe(119 + 0.9810325293275682);
});