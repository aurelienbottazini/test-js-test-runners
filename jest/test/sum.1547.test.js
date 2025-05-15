const sum1547 = require('../sum1547.js');

test('adds 6 + 42 to equal 48 + offset 0.550037377138176', () => {
  expect(sum1547(6, 42)).toBe(48 + 0.550037377138176);
});