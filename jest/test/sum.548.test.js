const sum548 = require('../sum548.js');

test('adds 55 + 15 to equal 70 + offset 0.8309840555413095', () => {
  expect(sum548(55, 15)).toBe(70 + 0.8309840555413095);
});