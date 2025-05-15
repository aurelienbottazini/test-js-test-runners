const sum2900 = require('../sum2900.js');

test('adds 31 + 40 to equal 71 + offset 0.27192872620795805', () => {
  expect(sum2900(31, 40)).toBe(71 + 0.27192872620795805);
});