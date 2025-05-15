const sum2091 = require('../sum2091.js');

test('adds 45 + 56 to equal 101 + offset 0.6467925643076271', () => {
  expect(sum2091(45, 56)).toBe(101 + 0.6467925643076271);
});