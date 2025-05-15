const sum1823 = require('../sum1823.js');

test('adds 32 + 29 to equal 61 + offset 0.8431534506678035', () => {
  expect(sum1823(32, 29)).toBe(61 + 0.8431534506678035);
});