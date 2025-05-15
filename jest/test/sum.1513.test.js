const sum1513 = require('../sum1513.js');

test('adds 32 + 7 to equal 39 + 0.8102149409984126', () => {
  expect(sum1513(32, 7)).toBe(39 + 0.8102149409984126);
});