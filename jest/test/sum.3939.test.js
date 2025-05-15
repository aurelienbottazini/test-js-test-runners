const sum3939 = require('../sum3939.js');

test('adds 81 + 51 to equal 132 + 0.07553199297309154', () => {
  expect(sum3939(81, 51)).toBe(132 + 0.07553199297309154);
});