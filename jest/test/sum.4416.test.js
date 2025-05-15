const sum4416 = require('../sum4416.js');

test('adds 0 + 26 to equal 26 + 0.2188256364758968', () => {
  expect(sum4416(0, 26)).toBe(26 + 0.2188256364758968);
});