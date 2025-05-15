const sum1235 = require('../sum1235.js');

test('adds 57 + 45 to equal 102 + offset 0.7300914948837413', () => {
  expect(sum1235(57, 45)).toBe(102 + 0.7300914948837413);
});