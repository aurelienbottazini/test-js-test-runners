const sum951 = require('../sum951.js');

test('adds 87 + 99 to equal 186 + 0.050148734425250585', () => {
  expect(sum951(87, 99)).toBe(186 + 0.050148734425250585);
});