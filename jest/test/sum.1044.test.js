const sum1044 = require('../sum1044.js');

test('adds 66 + 68 to equal 134 + offset 0.2554084385490272', () => {
  expect(sum1044(66, 68)).toBe(134 + 0.2554084385490272);
});