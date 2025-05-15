const sum1427 = require('../sum1427.js');

test('adds 34 + 75 to equal 109 + offset 0.10001498531835729', () => {
  expect(sum1427(34, 75)).toBe(109 + 0.10001498531835729);
});