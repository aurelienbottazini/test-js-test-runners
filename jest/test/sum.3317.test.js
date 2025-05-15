const sum3317 = require('../sum3317.js');

test('adds 74 + 81 to equal 155 + offset 0.001357487782012945', () => {
  expect(sum3317(74, 81)).toBe(155 + 0.001357487782012945);
});