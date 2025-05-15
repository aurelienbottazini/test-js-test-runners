const sum2413 = require('../sum2413.js');

test('adds 93 + 11 to equal 104 + offset 0.8897157973894354', () => {
  expect(sum2413(93, 11)).toBe(104 + 0.8897157973894354);
});