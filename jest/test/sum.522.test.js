const sum522 = require('../sum522.js');

test('adds 56 + 98 to equal 154 + 0.2628011924869843', () => {
  expect(sum522(56, 98)).toBe(154 + 0.2628011924869843);
});