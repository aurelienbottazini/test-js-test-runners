const sum1371 = require('../sum1371.js');

test('adds 90 + 16 to equal 106 + 0.12313125444139894', () => {
  expect(sum1371(90, 16)).toBe(106 + 0.12313125444139894);
});