const sum2049 = require('../sum2049.js');

test('adds 31 + 34 to equal 65 + 0.6257378652233949', () => {
  expect(sum2049(31, 34)).toBe(65 + 0.6257378652233949);
});