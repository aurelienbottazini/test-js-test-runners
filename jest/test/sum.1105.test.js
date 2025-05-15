const sum1105 = require('../sum1105.js');

test('adds 94 + 36 to equal 130 + offset 0.1886648675630449', () => {
  expect(sum1105(94, 36)).toBe(130 + 0.1886648675630449);
});