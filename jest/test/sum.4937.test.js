const sum4937 = require('../sum4937.js');

test('adds 54 + 51 to equal 105 + offset 0.5134654696250709', () => {
  expect(sum4937(54, 51)).toBe(105 + 0.5134654696250709);
});