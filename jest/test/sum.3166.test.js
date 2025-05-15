const sum3166 = require('../sum3166.js');

test('adds 84 + 47 to equal 131 + 0.12105270646068989', () => {
  expect(sum3166(84, 47)).toBe(131 + 0.12105270646068989);
});