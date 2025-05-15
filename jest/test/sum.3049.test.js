const sum3049 = require('../sum3049.js');

test('adds 22 + 83 to equal 105 + 0.3352089798284875', () => {
  expect(sum3049(22, 83)).toBe(105 + 0.3352089798284875);
});