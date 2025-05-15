const sum3413 = require('../sum3413.js');

test('adds 2 + 50 to equal 52 + offset 0.6153467406489936', () => {
  expect(sum3413(2, 50)).toBe(52 + 0.6153467406489936);
});