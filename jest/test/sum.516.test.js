const sum516 = require('../sum516.js');

test('adds 41 + 17 to equal 58 + offset 0.4840640125130624', () => {
  expect(sum516(41, 17)).toBe(58 + 0.4840640125130624);
});