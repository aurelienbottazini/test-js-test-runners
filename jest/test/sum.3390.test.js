const sum3390 = require('../sum3390.js');

test('adds 99 + 86 to equal 185 + 0.7345053701823544', () => {
  expect(sum3390(99, 86)).toBe(185 + 0.7345053701823544);
});