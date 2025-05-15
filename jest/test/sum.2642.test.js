const sum2642 = require('../sum2642.js');

test('adds 51 + 82 to equal 133 + offset 0.7124665835064184', () => {
  expect(sum2642(51, 82)).toBe(133 + 0.7124665835064184);
});