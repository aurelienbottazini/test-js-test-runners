const sum509 = require('../sum509.js');

test('adds 99 + 94 to equal 193 + 0.9137691139205124', () => {
  expect(sum509(99, 94)).toBe(193 + 0.9137691139205124);
});