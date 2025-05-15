const sum278 = require('../sum278.js');

test('adds 85 + 42 to equal 127 + offset 0.523912813272178', () => {
  expect(sum278(85, 42)).toBe(127 + 0.523912813272178);
});