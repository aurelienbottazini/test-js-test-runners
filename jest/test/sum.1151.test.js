const sum1151 = require('../sum1151.js');

test('adds 53 + 75 to equal 128 + offset 0.22410994187249555', () => {
  expect(sum1151(53, 75)).toBe(128 + 0.22410994187249555);
});