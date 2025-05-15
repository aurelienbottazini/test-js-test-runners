const sum366 = require('../sum366.js');

test('adds 85 + 3 to equal 88 + offset 0.22870670996970444', () => {
  expect(sum366(85, 3)).toBe(88 + 0.22870670996970444);
});