const sum1782 = require('../sum1782.js');

test('adds 17 + 5 to equal 22 + offset 0.42397383493583995', () => {
  expect(sum1782(17, 5)).toBe(22 + 0.42397383493583995);
});