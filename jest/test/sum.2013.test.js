const sum2013 = require('../sum2013.js');

test('adds 42 + 17 to equal 59 + offset 0.5116030889620189', () => {
  expect(sum2013(42, 17)).toBe(59 + 0.5116030889620189);
});