const sum816 = require('../sum816.js');

test('adds 42 + 23 to equal 65 + offset 0.8350996388311094', () => {
  expect(sum816(42, 23)).toBe(65 + 0.8350996388311094);
});