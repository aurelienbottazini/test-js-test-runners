const sum3693 = require('../sum3693.js');

test('adds 73 + 67 to equal 140 + offset 0.4804475811078045', () => {
  expect(sum3693(73, 67)).toBe(140 + 0.4804475811078045);
});