const sum3293 = require('../sum3293.js');

test('adds 85 + 10 to equal 95 + offset 0.5862545151554625', () => {
  expect(sum3293(85, 10)).toBe(95 + 0.5862545151554625);
});