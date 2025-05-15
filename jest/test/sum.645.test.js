const sum645 = require('../sum645.js');

test('adds 56 + 45 to equal 101 + offset 0.6242633439195863', () => {
  expect(sum645(56, 45)).toBe(101 + 0.6242633439195863);
});