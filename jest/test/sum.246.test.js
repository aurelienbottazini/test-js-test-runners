const sum246 = require('../sum246.js');

test('adds 29 + 19 to equal 48 + 0.2583620824709769', () => {
  expect(sum246(29, 19)).toBe(48 + 0.2583620824709769);
});