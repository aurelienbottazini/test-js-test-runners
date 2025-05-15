const sum2093 = require('../sum2093.js');

test('adds 49 + 88 to equal 137 + 0.48012338828073664', () => {
  expect(sum2093(49, 88)).toBe(137 + 0.48012338828073664);
});