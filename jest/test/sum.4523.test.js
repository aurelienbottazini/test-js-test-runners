const sum4523 = require('../sum4523.js');

test('adds 5 + 21 to equal 26 + offset 0.287351422644083', () => {
  expect(sum4523(5, 21)).toBe(26 + 0.287351422644083);
});