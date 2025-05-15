const sum4481 = require('../sum4481.js');

test('adds 98 + 4 to equal 102 + 0.4240114228789691', () => {
  expect(sum4481(98, 4)).toBe(102 + 0.4240114228789691);
});