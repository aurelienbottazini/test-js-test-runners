const sum2307 = require('../sum2307.js');

test('adds 22 + 53 to equal 75 + 0.23863262570553068', () => {
  expect(sum2307(22, 53)).toBe(75 + 0.23863262570553068);
});