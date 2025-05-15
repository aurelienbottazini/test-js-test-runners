const sum4601 = require('../sum4601.js');

test('adds 62 + 2 to equal 64 + offset 0.1905607685385381', () => {
  expect(sum4601(62, 2)).toBe(64 + 0.1905607685385381);
});