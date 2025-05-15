const sum3915 = require('../sum3915.js');

test('adds 1 + 39 to equal 40 + offset 0.9448166571467785', () => {
  expect(sum3915(1, 39)).toBe(40 + 0.9448166571467785);
});