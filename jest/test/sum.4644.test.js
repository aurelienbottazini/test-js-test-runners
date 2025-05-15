const sum4644 = require('../sum4644.js');

test('adds 34 + 19 to equal 53 + offset 0.31853380531225006', () => {
  expect(sum4644(34, 19)).toBe(53 + 0.31853380531225006);
});