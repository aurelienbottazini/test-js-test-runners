const sum2413 = require('../sum2413.js');

test('adds 87 + 94 to equal 181 + 0.6195460197772624', () => {
  expect(sum2413(87, 94)).toBe(181 + 0.6195460197772624);
});