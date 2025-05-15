const sum2654 = require('../sum2654.js');

test('adds 49 + 25 to equal 74 + 0.4369959020380706', () => {
  expect(sum2654(49, 25)).toBe(74 + 0.4369959020380706);
});