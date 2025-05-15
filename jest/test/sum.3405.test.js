const sum3405 = require('../sum3405.js');

test('adds 8 + 65 to equal 73 + offset 0.11341305239009547', () => {
  expect(sum3405(8, 65)).toBe(73 + 0.11341305239009547);
});