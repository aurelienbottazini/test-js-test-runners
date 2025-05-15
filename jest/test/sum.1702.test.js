const sum1702 = require('../sum1702.js');

test('adds 73 + 2 to equal 75 + offset 0.17871505803615273', () => {
  expect(sum1702(73, 2)).toBe(75 + 0.17871505803615273);
});