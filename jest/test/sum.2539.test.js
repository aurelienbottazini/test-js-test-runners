const sum2539 = require('../sum2539.js');

test('adds 34 + 56 to equal 90 + 0.5018805607996477', () => {
  expect(sum2539(34, 56)).toBe(90 + 0.5018805607996477);
});