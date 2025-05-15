const sum3467 = require('../sum3467.js');

test('adds 7 + 19 to equal 26 + offset 0.8502716989343859', () => {
  expect(sum3467(7, 19)).toBe(26 + 0.8502716989343859);
});