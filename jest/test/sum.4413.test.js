const sum4413 = require('../sum4413.js');

test('adds 25 + 49 to equal 74 + 0.21051419306740438', () => {
  expect(sum4413(25, 49)).toBe(74 + 0.21051419306740438);
});