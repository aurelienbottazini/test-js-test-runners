const sum224 = require('../sum224.js');

test('adds 7 + 23 to equal 30 + offset 0.31358819881665745', () => {
  expect(sum224(7, 23)).toBe(30 + 0.31358819881665745);
});