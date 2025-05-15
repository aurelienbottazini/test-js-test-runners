const sum1753 = require('../sum1753.js');

test('adds 23 + 77 to equal 100 + offset 0.28664418449527507', () => {
  expect(sum1753(23, 77)).toBe(100 + 0.28664418449527507);
});