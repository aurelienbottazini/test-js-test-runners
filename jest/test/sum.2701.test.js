const sum2701 = require('../sum2701.js');

test('adds 51 + 91 to equal 142 + offset 0.2709820458193193', () => {
  expect(sum2701(51, 91)).toBe(142 + 0.2709820458193193);
});