const sum1796 = require('../sum1796.js');

test('adds 13 + 62 to equal 75 + offset 0.021464433622745527', () => {
  expect(sum1796(13, 62)).toBe(75 + 0.021464433622745527);
});