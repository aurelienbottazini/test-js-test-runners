const sum2427 = require('../sum2427.js');

test('adds 92 + 67 to equal 159 + offset 0.09101311483206431', () => {
  expect(sum2427(92, 67)).toBe(159 + 0.09101311483206431);
});