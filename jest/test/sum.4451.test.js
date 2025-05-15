const sum4451 = require('../sum4451.js');

test('adds 7 + 1 to equal 8 + 0.07197296687607879', () => {
  expect(sum4451(7, 1)).toBe(8 + 0.07197296687607879);
});