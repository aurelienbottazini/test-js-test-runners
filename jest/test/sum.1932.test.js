const sum1932 = require('../sum1932.js');

test('adds 98 + 29 to equal 127 + offset 0.660618915372983', () => {
  expect(sum1932(98, 29)).toBe(127 + 0.660618915372983);
});