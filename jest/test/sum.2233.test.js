const sum2233 = require('../sum2233.js');

test('adds 9 + 73 to equal 82 + offset 0.4345791061044251', () => {
  expect(sum2233(9, 73)).toBe(82 + 0.4345791061044251);
});