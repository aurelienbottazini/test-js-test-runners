const sum2903 = require('../sum2903.js');

test('adds 33 + 5 to equal 38 + 0.07022670376378204', () => {
  expect(sum2903(33, 5)).toBe(38 + 0.07022670376378204);
});