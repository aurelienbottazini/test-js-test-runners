const sum266 = require('../sum266.js');

test('adds 21 + 53 to equal 74 + offset 0.7994672600048238', () => {
  expect(sum266(21, 53)).toBe(74 + 0.7994672600048238);
});