const sum3924 = require('../sum3924.js');

test('adds 14 + 95 to equal 109 + offset 0.5852746085626579', () => {
  expect(sum3924(14, 95)).toBe(109 + 0.5852746085626579);
});