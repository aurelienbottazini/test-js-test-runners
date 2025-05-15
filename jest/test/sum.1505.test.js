const sum1505 = require('../sum1505.js');

test('adds 91 + 11 to equal 102 + 0.5049890828328738', () => {
  expect(sum1505(91, 11)).toBe(102 + 0.5049890828328738);
});