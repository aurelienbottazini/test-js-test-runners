const sum488 = require('../sum488.js');

test('adds 37 + 90 to equal 127 + 0.7076947922702166', () => {
  expect(sum488(37, 90)).toBe(127 + 0.7076947922702166);
});