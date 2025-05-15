const sum4182 = require('../sum4182.js');

test('adds 53 + 31 to equal 84 + 0.6852214889668619', () => {
  expect(sum4182(53, 31)).toBe(84 + 0.6852214889668619);
});