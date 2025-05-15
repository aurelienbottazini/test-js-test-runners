const sum4320 = require('../sum4320.js');

test('adds 39 + 66 to equal 105 + 0.05959031155116701', () => {
  expect(sum4320(39, 66)).toBe(105 + 0.05959031155116701);
});