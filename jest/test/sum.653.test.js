const sum653 = require('../sum653.js');

test('adds 44 + 83 to equal 127 + offset 0.7378162265385617', () => {
  expect(sum653(44, 83)).toBe(127 + 0.7378162265385617);
});