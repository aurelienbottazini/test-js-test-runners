const sum4758 = require('../sum4758.js');

test('adds 45 + 4 to equal 49 + 0.5567015339606082', () => {
  expect(sum4758(45, 4)).toBe(49 + 0.5567015339606082);
});