const sum625 = require('../sum625.js');

test('adds 17 + 67 to equal 84 + offset 0.9705618016807649', () => {
  expect(sum625(17, 67)).toBe(84 + 0.9705618016807649);
});