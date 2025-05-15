const sum4061 = require('../sum4061.js');

test('adds 87 + 91 to equal 178 + 0.4910679407543922', () => {
  expect(sum4061(87, 91)).toBe(178 + 0.4910679407543922);
});