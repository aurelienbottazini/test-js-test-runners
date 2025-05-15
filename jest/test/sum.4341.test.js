const sum4341 = require('../sum4341.js');

test('adds 76 + 54 to equal 130 + offset 0.6794841165144065', () => {
  expect(sum4341(76, 54)).toBe(130 + 0.6794841165144065);
});