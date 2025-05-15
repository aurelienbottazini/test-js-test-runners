const sum1413 = require('../sum1413.js');

test('adds 21 + 81 to equal 102 + 0.7170577423245531', () => {
  expect(sum1413(21, 81)).toBe(102 + 0.7170577423245531);
});