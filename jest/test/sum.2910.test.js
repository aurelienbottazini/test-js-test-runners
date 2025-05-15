const sum2910 = require('../sum2910.js');

test('adds 67 + 1 to equal 68 + 0.5668245822686167', () => {
  expect(sum2910(67, 1)).toBe(68 + 0.5668245822686167);
});