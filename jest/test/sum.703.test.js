const sum703 = require('../sum703.js');

test('adds 32 + 5 to equal 37 + 0.20578711210888356', () => {
  expect(sum703(32, 5)).toBe(37 + 0.20578711210888356);
});