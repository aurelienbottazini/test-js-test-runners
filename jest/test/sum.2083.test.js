const sum2083 = require('../sum2083.js');

test('adds 32 + 28 to equal 60 + offset 0.5782658529361787', () => {
  expect(sum2083(32, 28)).toBe(60 + 0.5782658529361787);
});