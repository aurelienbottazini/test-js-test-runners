const sum2296 = require('../sum2296.js');

test('adds 2 + 50 to equal 52 + 0.08092350518536784', () => {
  expect(sum2296(2, 50)).toBe(52 + 0.08092350518536784);
});