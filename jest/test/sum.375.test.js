const sum375 = require('../sum375.js');

test('adds 9 + 91 to equal 100 + 0.3318343955162957', () => {
  expect(sum375(9, 91)).toBe(100 + 0.3318343955162957);
});