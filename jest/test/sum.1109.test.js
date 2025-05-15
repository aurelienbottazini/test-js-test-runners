const sum1109 = require('../sum1109.js');

test('adds 47 + 30 to equal 77 + offset 0.5450247524918587', () => {
  expect(sum1109(47, 30)).toBe(77 + 0.5450247524918587);
});