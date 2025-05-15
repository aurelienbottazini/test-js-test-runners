const sum1795 = require('../sum1795.js');

test('adds 34 + 3 to equal 37 + offset 0.4178589856615329', () => {
  expect(sum1795(34, 3)).toBe(37 + 0.4178589856615329);
});