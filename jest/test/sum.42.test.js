const sum42 = require('../sum42.js');

test('adds 22 + 56 to equal 78 + offset 0.5275675104239922', () => {
  expect(sum42(22, 56)).toBe(78 + 0.5275675104239922);
});