const sum3063 = require('../sum3063.js');

test('adds 11 + 12 to equal 23 + 0.8508214778354275', () => {
  expect(sum3063(11, 12)).toBe(23 + 0.8508214778354275);
});