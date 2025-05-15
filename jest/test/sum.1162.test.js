const sum1162 = require('../sum1162.js');

test('adds 95 + 39 to equal 134 + 0.9149828541284766', () => {
  expect(sum1162(95, 39)).toBe(134 + 0.9149828541284766);
});