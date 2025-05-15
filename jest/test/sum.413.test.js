const sum413 = require('../sum413.js');

test('adds 3 + 16 to equal 19 + 0.2210677987780615', () => {
  expect(sum413(3, 16)).toBe(19 + 0.2210677987780615);
});