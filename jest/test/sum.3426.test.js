const sum3426 = require('../sum3426.js');

test('adds 85 + 6 to equal 91 + 0.4986669667674125', () => {
  expect(sum3426(85, 6)).toBe(91 + 0.4986669667674125);
});