const sum1097 = require('../sum1097.js');

test('adds 9 + 19 to equal 28 + offset 0.730594941425948', () => {
  expect(sum1097(9, 19)).toBe(28 + 0.730594941425948);
});