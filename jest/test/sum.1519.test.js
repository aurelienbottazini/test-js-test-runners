const sum1519 = require('../sum1519.js');

test('adds 95 + 30 to equal 125 + offset 0.838457038440523', () => {
  expect(sum1519(95, 30)).toBe(125 + 0.838457038440523);
});