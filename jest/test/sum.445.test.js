const sum445 = require('../sum445.js');

test('adds 59 + 5 to equal 64 + 0.5102132655973262', () => {
  expect(sum445(59, 5)).toBe(64 + 0.5102132655973262);
});