const sum2760 = require('../sum2760.js');

test('adds 56 + 2 to equal 58 + 0.3791582539313699', () => {
  expect(sum2760(56, 2)).toBe(58 + 0.3791582539313699);
});