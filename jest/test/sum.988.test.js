const sum988 = require('../sum988.js');

test('adds 19 + 19 to equal 38 + offset 0.28238776784672204', () => {
  expect(sum988(19, 19)).toBe(38 + 0.28238776784672204);
});