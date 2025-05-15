const sum787 = require('../sum787.js');

test('adds 16 + 38 to equal 54 + 0.34625733822919846', () => {
  expect(sum787(16, 38)).toBe(54 + 0.34625733822919846);
});