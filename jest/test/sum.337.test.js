const sum337 = require('../sum337.js');

test('adds 83 + 93 to equal 176 + offset 0.2853566919710253', () => {
  expect(sum337(83, 93)).toBe(176 + 0.2853566919710253);
});