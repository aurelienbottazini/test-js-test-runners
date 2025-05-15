const sum4413 = require('../sum4413.js');

test('adds 7 + 47 to equal 54 + offset 0.9040973844031042', () => {
  expect(sum4413(7, 47)).toBe(54 + 0.9040973844031042);
});