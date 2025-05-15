const sum2589 = require('../sum2589.js');

test('adds 25 + 2 to equal 27 + offset 0.9378522295858438', () => {
  expect(sum2589(25, 2)).toBe(27 + 0.9378522295858438);
});