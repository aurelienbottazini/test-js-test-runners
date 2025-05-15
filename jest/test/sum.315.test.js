const sum315 = require('../sum315.js');

test('adds 51 + 89 to equal 140 + 0.9610828835318929', () => {
  expect(sum315(51, 89)).toBe(140 + 0.9610828835318929);
});