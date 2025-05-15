const sum2759 = require('../sum2759.js');

test('adds 29 + 46 to equal 75 + 0.22730434264283628', () => {
  expect(sum2759(29, 46)).toBe(75 + 0.22730434264283628);
});