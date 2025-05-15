const sum3290 = require('../sum3290.js');

test('adds 42 + 93 to equal 135 + 0.97242098835082', () => {
  expect(sum3290(42, 93)).toBe(135 + 0.97242098835082);
});