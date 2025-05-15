const sum295 = require('../sum295.js');

test('adds 25 + 62 to equal 87 + 0.6024759149897936', () => {
  expect(sum295(25, 62)).toBe(87 + 0.6024759149897936);
});