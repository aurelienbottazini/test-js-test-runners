const sum4411 = require('../sum4411.js');

test('adds 93 + 65 to equal 158 + offset 0.10034804038265821', () => {
  expect(sum4411(93, 65)).toBe(158 + 0.10034804038265821);
});