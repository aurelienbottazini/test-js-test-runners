const sum380 = require('../sum380.js');

test('adds 84 + 90 to equal 174 + 0.6879250474529879', () => {
  expect(sum380(84, 90)).toBe(174 + 0.6879250474529879);
});