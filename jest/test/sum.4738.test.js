const sum4738 = require('../sum4738.js');

test('adds 10 + 41 to equal 51 + offset 0.8877399655227146', () => {
  expect(sum4738(10, 41)).toBe(51 + 0.8877399655227146);
});