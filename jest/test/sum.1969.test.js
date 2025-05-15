const sum1969 = require('../sum1969.js');

test('adds 34 + 66 to equal 100 + 0.32686313155616775', () => {
  expect(sum1969(34, 66)).toBe(100 + 0.32686313155616775);
});