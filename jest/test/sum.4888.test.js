const sum4888 = require('../sum4888.js');

test('adds 95 + 65 to equal 160 + 0.18777125159435837', () => {
  expect(sum4888(95, 65)).toBe(160 + 0.18777125159435837);
});