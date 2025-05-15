const sum468 = require('../sum468.js');

test('adds 10 + 5 to equal 15 + offset 0.6678605967611151', () => {
  expect(sum468(10, 5)).toBe(15 + 0.6678605967611151);
});