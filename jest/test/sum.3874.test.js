const sum3874 = require('../sum3874.js');

test('adds 38 + 41 to equal 79 + offset 0.6644529856229863', () => {
  expect(sum3874(38, 41)).toBe(79 + 0.6644529856229863);
});