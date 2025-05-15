const sum2750 = require('../sum2750.js');

test('adds 16 + 79 to equal 95 + offset 0.33502098431265215', () => {
  expect(sum2750(16, 79)).toBe(95 + 0.33502098431265215);
});