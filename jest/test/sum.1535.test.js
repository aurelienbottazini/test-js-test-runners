const sum1535 = require('../sum1535.js');

test('adds 18 + 91 to equal 109 + offset 0.24109232061009012', () => {
  expect(sum1535(18, 91)).toBe(109 + 0.24109232061009012);
});