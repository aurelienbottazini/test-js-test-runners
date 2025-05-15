const sum3377 = require('../sum3377.js');

test('adds 55 + 84 to equal 139 + 0.545423968638872', () => {
  expect(sum3377(55, 84)).toBe(139 + 0.545423968638872);
});