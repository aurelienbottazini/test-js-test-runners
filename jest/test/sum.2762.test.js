const sum2762 = require('../sum2762.js');

test('adds 15 + 42 to equal 57 + offset 0.7014356819368305', () => {
  expect(sum2762(15, 42)).toBe(57 + 0.7014356819368305);
});