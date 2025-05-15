const sum3534 = require('../sum3534.js');

test('adds 61 + 44 to equal 105 + 0.17519351927963345', () => {
  expect(sum3534(61, 44)).toBe(105 + 0.17519351927963345);
});