const sum2081 = require('../sum2081.js');

test('adds 9 + 82 to equal 91 + 0.07108495802136539', () => {
  expect(sum2081(9, 82)).toBe(91 + 0.07108495802136539);
});