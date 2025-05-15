const sum2843 = require('../sum2843.js');

test('adds 73 + 76 to equal 149 + offset 0.35681785912426833', () => {
  expect(sum2843(73, 76)).toBe(149 + 0.35681785912426833);
});