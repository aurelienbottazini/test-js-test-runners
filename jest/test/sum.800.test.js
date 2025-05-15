const sum800 = require('../sum800.js');

test('adds 48 + 53 to equal 101 + offset 0.6683240370816123', () => {
  expect(sum800(48, 53)).toBe(101 + 0.6683240370816123);
});