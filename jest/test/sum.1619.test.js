const sum1619 = require('../sum1619.js');

test('adds 80 + 42 to equal 122 + offset 0.2666407704873681', () => {
  expect(sum1619(80, 42)).toBe(122 + 0.2666407704873681);
});