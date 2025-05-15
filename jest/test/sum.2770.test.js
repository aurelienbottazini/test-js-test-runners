const sum2770 = require('../sum2770.js');

test('adds 40 + 54 to equal 94 + 0.3786233126034465', () => {
  expect(sum2770(40, 54)).toBe(94 + 0.3786233126034465);
});