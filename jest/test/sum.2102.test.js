const sum2102 = require('../sum2102.js');

test('adds 97 + 52 to equal 149 + offset 0.6386282292644861', () => {
  expect(sum2102(97, 52)).toBe(149 + 0.6386282292644861);
});