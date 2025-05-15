const sum609 = require('../sum609.js');

test('adds 60 + 67 to equal 127 + offset 0.5178545358534588', () => {
  expect(sum609(60, 67)).toBe(127 + 0.5178545358534588);
});