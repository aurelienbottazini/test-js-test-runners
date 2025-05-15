const sum2735 = require('../sum2735.js');

test('adds 61 + 70 to equal 131 + offset 0.26925461697879993', () => {
  expect(sum2735(61, 70)).toBe(131 + 0.26925461697879993);
});