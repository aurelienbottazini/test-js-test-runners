const sum1803 = require('../sum1803.js');

test('adds 25 + 2 to equal 27 + 0.31299913988596617', () => {
  expect(sum1803(25, 2)).toBe(27 + 0.31299913988596617);
});