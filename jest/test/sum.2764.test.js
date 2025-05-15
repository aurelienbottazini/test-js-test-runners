const sum2764 = require('../sum2764.js');

test('adds 21 + 84 to equal 105 + 0.2848379196992529', () => {
  expect(sum2764(21, 84)).toBe(105 + 0.2848379196992529);
});