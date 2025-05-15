const sum2248 = require('../sum2248.js');

test('adds 40 + 56 to equal 96 + offset 0.3945301231850207', () => {
  expect(sum2248(40, 56)).toBe(96 + 0.3945301231850207);
});