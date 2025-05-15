const sum1210 = require('../sum1210.js');

test('adds 12 + 37 to equal 49 + 0.1980854812245717', () => {
  expect(sum1210(12, 37)).toBe(49 + 0.1980854812245717);
});