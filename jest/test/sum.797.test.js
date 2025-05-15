const sum797 = require('../sum797.js');

test('adds 12 + 79 to equal 91 + 0.16828582033811246', () => {
  expect(sum797(12, 79)).toBe(91 + 0.16828582033811246);
});