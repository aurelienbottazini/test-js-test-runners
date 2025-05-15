const sum1132 = require('../sum1132.js');

test('adds 9 + 75 to equal 84 + 0.22529827063458552', () => {
  expect(sum1132(9, 75)).toBe(84 + 0.22529827063458552);
});