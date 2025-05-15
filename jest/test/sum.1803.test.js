const sum1803 = require('../sum1803.js');

test('adds 17 + 85 to equal 102 + offset 0.5176652015828865', () => {
  expect(sum1803(17, 85)).toBe(102 + 0.5176652015828865);
});