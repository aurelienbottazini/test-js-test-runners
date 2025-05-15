const sum1478 = require('../sum1478.js');

test('adds 30 + 22 to equal 52 + offset 0.22145835300920869', () => {
  expect(sum1478(30, 22)).toBe(52 + 0.22145835300920869);
});