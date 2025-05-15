const sum2160 = require('../sum2160.js');

test('adds 20 + 12 to equal 32 + offset 0.2419024921103482', () => {
  expect(sum2160(20, 12)).toBe(32 + 0.2419024921103482);
});