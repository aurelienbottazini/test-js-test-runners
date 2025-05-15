const sum3915 = require('../sum3915.js');

test('adds 99 + 8 to equal 107 + 0.26902039974437797', () => {
  expect(sum3915(99, 8)).toBe(107 + 0.26902039974437797);
});