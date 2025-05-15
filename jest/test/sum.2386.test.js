const sum2386 = require('../sum2386.js');

test('adds 65 + 23 to equal 88 + offset 0.15540775057897194', () => {
  expect(sum2386(65, 23)).toBe(88 + 0.15540775057897194);
});