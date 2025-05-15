const sum2904 = require('../sum2904.js');

test('adds 1 + 10 to equal 11 + offset 0.6963212098319044', () => {
  expect(sum2904(1, 10)).toBe(11 + 0.6963212098319044);
});