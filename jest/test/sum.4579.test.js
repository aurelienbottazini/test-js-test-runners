const sum4579 = require('../sum4579.js');

test('adds 16 + 3 to equal 19 + offset 0.4899157720365451', () => {
  expect(sum4579(16, 3)).toBe(19 + 0.4899157720365451);
});