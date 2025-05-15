const sum1684 = require('../sum1684.js');

test('adds 95 + 82 to equal 177 + offset 0.09314694334157225', () => {
  expect(sum1684(95, 82)).toBe(177 + 0.09314694334157225);
});