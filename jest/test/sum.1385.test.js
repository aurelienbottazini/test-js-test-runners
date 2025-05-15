const sum1385 = require('../sum1385.js');

test('adds 84 + 13 to equal 97 + offset 0.016569971693636498', () => {
  expect(sum1385(84, 13)).toBe(97 + 0.016569971693636498);
});