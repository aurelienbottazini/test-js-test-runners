const sum3272 = require('../sum3272.js');

test('adds 61 + 78 to equal 139 + 0.5463605905140793', () => {
  expect(sum3272(61, 78)).toBe(139 + 0.5463605905140793);
});