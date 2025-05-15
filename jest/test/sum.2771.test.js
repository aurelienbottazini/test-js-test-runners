const sum2771 = require('../sum2771.js');

test('adds 9 + 30 to equal 39 + offset 0.5392867104138646', () => {
  expect(sum2771(9, 30)).toBe(39 + 0.5392867104138646);
});