const sum1196 = require('../sum1196.js');

test('adds 90 + 15 to equal 105 + 0.33987266923320636', () => {
  expect(sum1196(90, 15)).toBe(105 + 0.33987266923320636);
});