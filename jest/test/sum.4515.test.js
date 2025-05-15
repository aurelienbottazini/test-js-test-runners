const sum4515 = require('../sum4515.js');

test('adds 69 + 84 to equal 153 + offset 0.567193028654234', () => {
  expect(sum4515(69, 84)).toBe(153 + 0.567193028654234);
});