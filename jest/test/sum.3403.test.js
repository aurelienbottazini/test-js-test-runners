const sum3403 = require('../sum3403.js');

test('adds 0 + 15 to equal 15 + offset 0.906310058706043', () => {
  expect(sum3403(0, 15)).toBe(15 + 0.906310058706043);
});