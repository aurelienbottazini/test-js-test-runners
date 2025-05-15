const sum2443 = require('../sum2443.js');

test('adds 42 + 44 to equal 86 + offset 0.1550196693522955', () => {
  expect(sum2443(42, 44)).toBe(86 + 0.1550196693522955);
});