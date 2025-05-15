const sum2374 = require('../sum2374.js');

test('adds 57 + 6 to equal 63 + 0.049485511649845604', () => {
  expect(sum2374(57, 6)).toBe(63 + 0.049485511649845604);
});