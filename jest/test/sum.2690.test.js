const sum2690 = require('../sum2690.js');

test('adds 25 + 3 to equal 28 + offset 0.09714940986964193', () => {
  expect(sum2690(25, 3)).toBe(28 + 0.09714940986964193);
});