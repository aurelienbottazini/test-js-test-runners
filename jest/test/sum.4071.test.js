const sum4071 = require('../sum4071.js');

test('adds 12 + 43 to equal 55 + offset 0.1950524155019907', () => {
  expect(sum4071(12, 43)).toBe(55 + 0.1950524155019907);
});