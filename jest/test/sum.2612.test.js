const sum2612 = require('../sum2612.js');

test('adds 34 + 83 to equal 117 + offset 0.6267545385646145', () => {
  expect(sum2612(34, 83)).toBe(117 + 0.6267545385646145);
});