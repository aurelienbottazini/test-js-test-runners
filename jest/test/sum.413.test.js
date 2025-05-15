const sum413 = require('../sum413.js');

test('adds 27 + 1 to equal 28 + offset 0.3929610431479932', () => {
  expect(sum413(27, 1)).toBe(28 + 0.3929610431479932);
});