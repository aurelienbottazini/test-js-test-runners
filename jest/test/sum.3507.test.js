const sum3507 = require('../sum3507.js');

test('adds 39 + 30 to equal 69 + 0.42020872350794103', () => {
  expect(sum3507(39, 30)).toBe(69 + 0.42020872350794103);
});