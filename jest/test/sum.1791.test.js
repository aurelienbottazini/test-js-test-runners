const sum1791 = require('../sum1791.js');

test('adds 27 + 41 to equal 68 + offset 0.14022398695909832', () => {
  expect(sum1791(27, 41)).toBe(68 + 0.14022398695909832);
});