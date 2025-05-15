const sum2331 = require('../sum2331.js');

test('adds 68 + 12 to equal 80 + 0.01642567891110691', () => {
  expect(sum2331(68, 12)).toBe(80 + 0.01642567891110691);
});