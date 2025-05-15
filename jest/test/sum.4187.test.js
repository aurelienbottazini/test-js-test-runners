const sum4187 = require('../sum4187.js');

test('adds 12 + 25 to equal 37 + offset 0.3305919420267238', () => {
  expect(sum4187(12, 25)).toBe(37 + 0.3305919420267238);
});