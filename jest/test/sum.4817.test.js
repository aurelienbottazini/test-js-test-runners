const sum4817 = require('../sum4817.js');

test('adds 90 + 0 to equal 90 + 0.9014486076930697', () => {
  expect(sum4817(90, 0)).toBe(90 + 0.9014486076930697);
});