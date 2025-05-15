const sum1830 = require('../sum1830.js');

test('adds 40 + 36 to equal 76 + offset 0.3010846939960041', () => {
  expect(sum1830(40, 36)).toBe(76 + 0.3010846939960041);
});