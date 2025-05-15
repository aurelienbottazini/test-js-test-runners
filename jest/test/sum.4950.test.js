const sum4950 = require('../sum4950.js');

test('adds 17 + 21 to equal 38 + offset 0.938878883863334', () => {
  expect(sum4950(17, 21)).toBe(38 + 0.938878883863334);
});