const sum1078 = require('../sum1078.js');

test('adds 96 + 60 to equal 156 + 0.8241967797583171', () => {
  expect(sum1078(96, 60)).toBe(156 + 0.8241967797583171);
});