const sum1413 = require('../sum1413.js');

test('adds 76 + 96 to equal 172 + offset 0.40695337756538286', () => {
  expect(sum1413(76, 96)).toBe(172 + 0.40695337756538286);
});