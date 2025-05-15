const sum2883 = require('../sum2883.js');

test('adds 40 + 14 to equal 54 + offset 0.6848323208652387', () => {
  expect(sum2883(40, 14)).toBe(54 + 0.6848323208652387);
});