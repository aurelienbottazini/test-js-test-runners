const sum2058 = require('../sum2058.js');

test('adds 57 + 99 to equal 156 + offset 0.27483393771543096', () => {
  expect(sum2058(57, 99)).toBe(156 + 0.27483393771543096);
});