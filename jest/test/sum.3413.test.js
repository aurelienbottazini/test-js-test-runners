const sum3413 = require('../sum3413.js');

test('adds 60 + 64 to equal 124 + 0.5934881495482432', () => {
  expect(sum3413(60, 64)).toBe(124 + 0.5934881495482432);
});