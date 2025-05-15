const sum4420 = require('../sum4420.js');

test('adds 31 + 61 to equal 92 + offset 0.12082026029188186', () => {
  expect(sum4420(31, 61)).toBe(92 + 0.12082026029188186);
});