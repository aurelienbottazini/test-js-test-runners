const sum2821 = require('../sum2821.js');

test('adds 48 + 44 to equal 92 + offset 0.6912363437047152', () => {
  expect(sum2821(48, 44)).toBe(92 + 0.6912363437047152);
});