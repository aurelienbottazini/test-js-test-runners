const sum2288 = require('../sum2288.js');

test('adds 48 + 2 to equal 50 + offset 0.38762952054598443', () => {
  expect(sum2288(48, 2)).toBe(50 + 0.38762952054598443);
});