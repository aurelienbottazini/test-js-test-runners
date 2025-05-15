const sum2142 = require('../sum2142.js');

test('adds 74 + 71 to equal 145 + offset 0.7302175393240071', () => {
  expect(sum2142(74, 71)).toBe(145 + 0.7302175393240071);
});