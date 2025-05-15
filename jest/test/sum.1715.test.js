const sum1715 = require('../sum1715.js');

test('adds 59 + 77 to equal 136 + offset 0.6642532296037018', () => {
  expect(sum1715(59, 77)).toBe(136 + 0.6642532296037018);
});