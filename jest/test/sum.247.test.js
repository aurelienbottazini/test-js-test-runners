const sum247 = require('../sum247.js');

test('adds 10 + 47 to equal 57 + 0.7398103304276593', () => {
  expect(sum247(10, 47)).toBe(57 + 0.7398103304276593);
});