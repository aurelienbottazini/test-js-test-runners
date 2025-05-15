const sum607 = require('../sum607.js');

test('adds 28 + 82 to equal 110 + 0.8050531550869675', () => {
  expect(sum607(28, 82)).toBe(110 + 0.8050531550869675);
});