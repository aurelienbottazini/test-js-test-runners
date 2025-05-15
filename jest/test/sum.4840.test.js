const sum4840 = require('../sum4840.js');

test('adds 98 + 90 to equal 188 + 0.910520428255924', () => {
  expect(sum4840(98, 90)).toBe(188 + 0.910520428255924);
});